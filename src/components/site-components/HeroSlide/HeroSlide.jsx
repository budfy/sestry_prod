import './HeroSlide.scss'

import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export default function HeroSlide (props)
{
  return(
    <div className={classNames(props.className, 'hero-slide')}>
      <NavLink to={ props.link } className="hero-slide__link">
        <img src={props.pic} alt=""className='hero-slide__pic'/>
                    <div className="hero-slide__inner">
              <p className="hero-slide__title --h1">
              {props.title}
              </p>
          <p className='hero-slide__text'>{ props.children }</p>
            </div>
      </NavLink>
    </div>
  );
}