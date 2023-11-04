import './Social.scss'

import { Facebook, Instagram, Telegram, Tiktok } from '@styled-icons/bootstrap';

import classNames from 'classnames';

export default function Social (props)
{
  let socialLinks = [
    {
      link: 'https://www.instagram.com/sestry.jewelry/',
      icon: (<Instagram className="social__icon" />),
      uid:'Instagram'
    },
    {
      link: 'https://www.tiktok.com/@sestry.prykrasy',
      icon: (<Tiktok className="social__icon" />),
      uid:'Tiktok'
    },
    {
      link: 'https://t.me/sestrystorebot',
      icon: (<Telegram className="social__icon" />),
      uid:'Telegram'
    },
    {
      link: 'https://www.facebook.com/profile.php?id=100088299847986',
      icon: (<Facebook className="social__icon" />),
      uid:'Facebook'
    },
  ]

  const socialItem = socialLinks.map((link) =>
    <li className='social__item' key={`${props.position}-${link.uid}`}>
      <a href={link.link} className='social__link' target='_blank' rel='nofollow noreferrer' aria-label={`Link to ${link.uid}`} title={`Link to ${link.uid}`}>
        {link.icon}
      </a>
    </li>
  )
  
  return(
    <ul className={classNames("social", props.className)}> {socialItem} </ul>
  );
}