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

import { Icon } from '@mui/material';

const HeaderLog = () => {
  return (
    <Icon sx={{ height: '100%', width: '100%', display: 'flex' }}>
      <img src={'./fair-protocol-outline.svg'} style={{ color: '#1F1F26' }} alt='' />
    </Icon>
  );
};

export default HeaderLog;
