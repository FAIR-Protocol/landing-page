/*
 * Fair Protocol - Landing Page
 * Copyright (C) 2023 Fair Protocol
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 */

import JamboSection from './components/JamboSection';
import ScreenShotSec from './components/ScreenShotSec';
import Teams from './components/Teams';
import VideoCard from './components/VideoCard';
import NewsSection from './components/NewsSection';
import { useEffect } from 'react';
import { Box } from '@mui/material';

// icons
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

// styles
import './scss/universal-styles.scss';

function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/ghost/signup-form@~0.1/umd/signup-form.min.js';
    script.setAttribute('data-button-color', '#3aaaaa');
    script.setAttribute('data-button-text-color', '#FFFFFF');
    script.setAttribute('data-site', 'https://blog.getfair.ai/');
    script.async = true;
    const subscribeDiv = document.getElementById('subscribe-email-div');
    subscribeDiv?.appendChild(
      script /*  document.getElementById('subscribe-email-div')?.parentNode! */,
    );

    return () => {
      subscribeDiv?.removeChild(script);
    };
  }, []);
  return (
    <>
      <style>
        {`
          button.my-auto.grid {
            margin-top: 20px;
            margin-bottom: 0 !important;
          }
      `}
      </style>
      <div className='z-10'>
        <JamboSection />
        <VideoCard />
        <ScreenShotSec />
        {/*< Carousel /> */}
        <NewsSection />
        <Teams />
        <div className='flex flex-col w-full items-center my-10'>
          <div className='mb-3 text-with-dark-bg font-bold'>
            <div className='py-1 text-xl'>
              <FavoriteRoundedIcon style={{ verticalAlign: 'text-bottom' }} />
              <span className='ml-3'>Subscribe and stay updated!</span>
            </div>
          </div>

          <Box
            id={'subscribe-email-div'}
            sx={{
              minHeight: '58px',
              width: '100%',
              maxWidth: '444px',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          ></Box>
        </div>
      </div>
    </>
  );
}

export default Home;
