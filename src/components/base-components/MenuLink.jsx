import { NavLink } from 'react-router-dom';
import styled from "styled-components";

const MenuLink = styled(NavLink)`
      margin: 0 0.5rem;
    font-size: 1.25rem;
    font-weight: 600;
    text-decoration: none;
    color: var(--color__grey-20);
    transition: all ease-in-out 0.25s;

    &:hover {
      color: var(--color__blue-50);
    }

    &:focus {
      outline: transparent;
    }

    &:focus-visible {
      text-decoration: underline;
    }

    &:active {
      color: var(--color__purple-50);
    }
    &.active{
      color: var(--color__red-50);
      pointer-events: none;
      cursor: default;
    }
`
export default MenuLink;