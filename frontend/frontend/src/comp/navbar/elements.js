import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import menu from './menu.svg';
import styles from './elements.css';

export const Nav = styled.nav`
  background-color: #fff;
  height: ;
  display: flex;
  justify-content: space-between;
  padding: 2%;
  z-index: 10%;
`;

export function NavLink1 (props) {
    return (
      <div className="NavLink1">
              {props.children}

      </div>
    )
  };

export function NavLink2 (props) {
    return (
      <div className="NavLink2">
              {props.children}

      </div>
    )
  };


export const Menu = styled(Link)`
  display: none;
  color: #000;

  @media screen and (max-width: 768px) {
    display: block;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%);
    cursor: pointer;
  }
`;

export function NavBtnLink1(props) {
    return (props.trigger) ? (
      <div className="NavBtnLink1">
              {props.children}

      </div>
    )  : " ";

  };

export function NavBtnLink2 (props) {
    return (props.trigger) ? (
      <div className="NavBtnLink2">
              {props.children}

      </div>
    )  : "";
  };

export function NavBtnLink3 (props) {
    return (props.trigger) ? (
      <div className="NavBtnLink3">
              {props.children}

      </div>
    )  : "";
};

export function NavBtn (props) {
    return (
      <div className="NavBtn">
              {props.children}

      </div>
    )
  };


