import React from 'react';

import Styles from '../../styles/Button.module.css';
import Image from 'next/image';

function Button(props) {
  return (
    <>
      <div className={Styles.Button}>
        <a href={props.link} target='_blank'>
          <div className={Styles.Logo}>
            <Image className='img'src={props.linkLogo} width='34' height='34' />
          </div>
          <div className="text">
            <p>{props.text}</p>
          </div>
        </a>
      </div>
    </>
  );
}

export default Button;