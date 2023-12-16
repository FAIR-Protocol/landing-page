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

import Star from '../svg/Star';
import { motion } from 'framer-motion';
import { FAIR_MARKETPLACE } from '../constants';
export default function JamboSection() {
  return (
    <div className='w-[80%] relative mx-auto flex justify-center mt-28'>
      {/* <Animation style={'left-0'} />
      <Animation2 style={'right-0'} /> */}
      <motion.div>
        <Aiexper />
      </motion.div>
    </div>
  );
}

const animateConfig = { y: [0, 120, 0], opacity: 0.8, scale: 1 };

function Aiexper() {
  return (
    <div className='flex justify-center items-center flex-col '>
      <motion.div
        initial={{ opacity: 0, scale: 0, translateY: -5 }}
        animate={animateConfig}
        transition={{
          duration: 1,
          delay: 1,
        }}
      >
        <div className='duration-1000 text-black '>
          <Star />
        </div>
      </motion.div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 0.3,
        }}
      >
        <h1 className='lg:text-5xl text-3xl  lg:px-96 text-center font-light'>
          Start to Decentralise Your AI Experience
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.3,
          delay: 1,
        }}
        className='md:w-fit w-full'
      >
        <a href={FAIR_MARKETPLACE} target='blank'>
          <button className=' text-gray-600 mt-16 border border-black w-full bg-white hover:shadow-md rounded-lg md:px-28  py-3 duration-500 hover:-translate-y-1 hover:bg-[#e8e8e8]'>
            Try Now
          </button>
        </a>
      </motion.div>
    </div>
  );
}
