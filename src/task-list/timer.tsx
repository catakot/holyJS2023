import React, {useCallback, useState} from 'react';
import {Button, Progress} from 'antd';
import './timer.scss';

const fiveMinutes = 5 * 60 * 1000;

export const Timer = React.memo(() => {
  const [inProgress, setInprogress] = useState(false);
  const [currentDate, setDate] = useState<number>(fiveMinutes);

  const onStartClick = useCallback(() => {
    setInprogress(true);
    const interval = setInterval(() => {
      setDate((prev) => {
        const newDate = prev - 100;
        if (newDate === 0) {
          clearInterval(interval);
          setInprogress(false);
          setDate(fiveMinutes);
        }
        return newDate;
      });
    }, 100);
  }, []);
  console.log(Math.floor((currentDate / fiveMinutes) * 100));
  return (
    <div className="timer">
      {inProgress && (
        <Progress
          type="circle"
          status={!inProgress ? 'normal' : undefined}
          strokeColor={{'0%': '#ff0000', '50%': '#077aff', '100%': '#2cff00'}}
          size={200}
          format={() => {
            const minutes = Math.floor(currentDate / 1000 / 60);
            const seconds = Math.ceil((currentDate / 1000) % 60);
            return `${minutes.toString().padStart(2, '0')}: ${seconds
              .toString()
              .padStart(2, '0')}`;
          }}
          percent={Math.floor((currentDate / fiveMinutes) * 100)}
        />
      )}
      {!inProgress && (
        <Button
          className="timerBtn"
          type="primary"
          size="large"
          onClick={onStartClick}
        >
          Start
        </Button>
      )}
    </div>
  );
});
