/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {CalendarBase} from './CalendarBase';
import {createCalendar} from '@internationalized/date';
import {DateValue, SpectrumCalendarProps} from '@react-types/calendar';
import React from 'react';
import {useCalendar} from '@react-aria/calendar';
import {useCalendarState} from '@react-stately/calendar';

export function Calendar<T extends DateValue>(props: SpectrumCalendarProps<T>) {
  let state = useCalendarState({
    ...props,
    createCalendar
  });
  let aria = useCalendar(props, state);
  return (
    <CalendarBase
      {...props}
      state={state}
      aria={aria} />
  );
}
