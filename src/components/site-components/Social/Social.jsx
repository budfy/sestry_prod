import './Social.scss'

import { Facebook, Instagram, Telegram, Tiktok } from '@styled-icons/bootstrap';

import classNames from 'classnames';

export default function Social (props)
{
  let socialLinks = [
    {
      link: 'https://instagram.com',
      icon:(<Instagram className="social__icon"/>)
    },
    {
      link: 'https://tiktok.com',
      icon:(<Tiktok className="social__icon"/>)
    },
    {
      link: 'https://instagram.com',
      icon:(<Telegram className="social__icon"/>)
    },
    {
      link: 'https://instagram.com',
      icon:(<Facebook className="social__icon"/>)
    },
  ]

  const socialItem = socialLinks.map((link) =>
    <li className='social__item'>
      <a href={link.link} className='social__link' target='_blank' rel='nofollow noreferrer'>
        {link.icon}
      </a>
    </li>
  )
  
  return(
    <ul className={classNames("social", props.className)}> {socialItem} </ul>
  );
}