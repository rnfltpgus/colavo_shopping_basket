/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import padNumber from "../utils/padNumber";

import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

type HeaderProp = {
  title: string;
};

const Header = ({ title }: HeaderProp): JSX.Element => {
  const navigate = useNavigate();
  let now = new Date();
  const [year, setYear] = useState(padNumber(now.getFullYear(), 2));
  const [month, setMonth] = useState(padNumber(now.getMonth(), 2));
  const [data, setData] = useState(padNumber(now.getDate(), 2));
  const [hour, setHour] = useState(padNumber(now.getHours(), 2));
  const [min, setMin] = useState(padNumber(now.getMinutes(), 2));

  useEffect(() => {
    let interval: string | number | NodeJS.Timeout;

    interval = setInterval(() => {
      now = new Date();
      setYear(padNumber(now.getFullYear(), 2));
      setMonth(padNumber(now.getMonth(), 2));
      setData(padNumber(now.getDate(), 2));
      setHour(padNumber(now.getHours(), 2));
      setMin(padNumber(now.getMinutes(), 2));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <HeaderContainer>
      <BackButton onClick={() => navigate("/")}>
        <AiOutlineClose />
      </BackButton>
      <NavTitle>
        {title}
        <RealTime>
          {year}.{month}.{data}. {hour}:{min}
        </RealTime>
      </NavTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  left: 0;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const BackButton = styled.div`
  cursor: pointer;
`;

const NavTitle = styled.div`
  margin: auto;
`;

const RealTime = styled.div`
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
  font-size: 3px;
  color: #a6a6a6;
`;
