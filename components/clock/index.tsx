"use client";
import React, { useEffect, useState } from "react";
import { interval } from "rxjs";
import moment from "moment";
import { Text } from "@chakra-ui/react";
type Props = {};

function Clock({}: Props) {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    const source = interval(1000);
    const timer = source.subscribe((value) => {
      //进行时间设置
      setTime(moment().format("LTS"));
    });
    return () => {
      timer.unsubscribe();
    };
  }, []);

  return (
    <Text
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      bgClip="text"
      fontSize="6xl"
      fontWeight="extrabold"
      textAlign={"center"}
    >
      {time}
    </Text>
  );
}

export default Clock;
