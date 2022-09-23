/*!
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/* global filtersOptions, moment */

import {
  Box,
  Button,
  Flex,
  Input,
  Select,
} from '@chakra-ui/react';
import React from 'react';
import { useTimezone } from './context/timezone';
import { isoFormatWithoutTZ } from '../datetime_utils';

import useFilters from './utils/useFilters';

const FilterBar = () => {
  const {
    filters,
    onBaseDateChange,
    onNumRunsChange,
    onRunTypeChange,
    onRunStateChange,
    clearFilters,
  } = useFilters();

  const { timezone } = useTimezone();
  const time = moment(filters.baseDate);
  const formattedTime = time.tz(timezone).format(isoFormatWithoutTZ);

  const inputStyles = { backgroundColor: 'white', size: 'lg' };

  return (
    <Flex backgroundColor="none" mt={4} p={4}>
      <Box px={2}>
        <Input
          boxShadow={'0 8px 16px 0 rgb(145 158 171 / 24%)'}
          cursor={'pointer'}
          {...inputStyles}
          type="datetime-local"
          value={formattedTime || ''}
          onChange={(e) => onBaseDateChange(e.target.value)}
        />
      </Box>
      <Box px={2}>
        <Select
          boxShadow={'0 8px 16px 0 rgb(145 158 171 / 24%)'}
          cursor={'pointer'}
          {...inputStyles}
          placeholder="Runs"
          value={filters.numRuns || ''}
          onChange={(e) => onNumRunsChange(e.target.value)}
        >
          {filtersOptions.numRuns.map((value) => (
            <option value={value} key={value}>{value}</option>
          ))}
        </Select>
      </Box>
      <Box px={2}>
        <Select
          boxShadow={'0 8px 16px 0 rgb(145 158 171 / 24%)'}
          cursor={'pointer'}
          {...inputStyles}
          value={filters.runType || ''}
          onChange={(e) => onRunTypeChange(e.target.value)}
        >
          <option value="" key="all">All Run Types</option>
          {filtersOptions.runTypes.map((value) => (
            <option value={value} key={value}>{value}</option>
          ))}
        </Select>
      </Box>
      <Box />
      <Box px={2}>
        <Select
          boxShadow={'0 8px 16px 0 rgb(145 158 171 / 24%)'}
          cursor={'pointer'}
          {...inputStyles}
          value={filters.runState || ''}
          onChange={(e) => onRunStateChange(e.target.value)}
        >
          <option value="" key="all">All Run States</option>
          {filtersOptions.dagStates.map((value) => (
            <option value={value} key={value}>{value}</option>
          ))}
        </Select>
      </Box>
      <Box px={2}>
        <Button
          borderColor={"rgb(56, 83, 200)"}
          color={"rgb(56, 83, 200)"}
          boxShadow={'0 8px 16px 0 rgb(145 158 171 / 24%)'}
          cursor={'pointer'}
          aria-label="Reset filters"
          background="white"
          variant="outline"
          onClick={clearFilters}
          size="lg"
        >
          Clear Filters
        </Button>
      </Box>
    </Flex>
  );
};

export default FilterBar;
