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

import { FaGithub, FaDiscord, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { TWITTER_LINK, DISCORD_LINK, LINKEDIN_LINK, YOUTUBE_LINK, GIT_LINK } from '../constants';

const iconDimension = 'h-8 w-8';
const blackIcons = 'text-black hover:text-white';

export default function Socials() {
  return (
    <div className='flex space-x-4'>
      <a href={TWITTER_LINK} target='_blank' className={blackIcons}>
        <FaXTwitter className={iconDimension} />
      </a>
      <a href={GIT_LINK} target='_blank' className={blackIcons}>
        <FaGithub className={iconDimension} />
      </a>
      <a href={DISCORD_LINK} target='_blank' className='text-black hover:text-indigo-500'>
        <FaDiscord className={iconDimension} />
      </a>
      <a href={YOUTUBE_LINK} target='_blank' className='text-black hover:text-red-500'>
        <FaYoutube className={iconDimension} />
      </a>
      <a href={LINKEDIN_LINK} target='_blank' className='text-black hover:text-blue-500'>
        <FaLinkedin className={iconDimension} />
      </a>
    </div>
  );
}
