import * as React from 'react';
import dayjs from 'dayjs';
import Typography from '@mui/material/Typography';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DigitalClock } from '@mui/x-date-pickers/DigitalClock';
import { MultiSectionDigitalClock } from '@mui/x-date-pickers/MultiSectionDigitalClock';

export default function DigitalClockAmPm({post, setPost}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer
        components={[
          'DigitalClock',
          'MultiSectionDigitalClock',
          'DigitalClock',
          'MultiSectionDigitalClock',
          'DigitalClock',
          'MultiSectionDigitalClock',
        ]}
      >
        <DemoItem>
          <Typography variant="body2">
            
          </Typography>
          <DemoContainer components={['DigitalClock', 'MultiSectionDigitalClock']}>
           
            <DemoItem>
              <MultiSectionDigitalClock onChange={(e) => setPost({...post, time: e.target.value})} defaultValue={dayjs('2022-04-17T15:30')} />
            </DemoItem>
          </DemoContainer>
        </DemoItem>

      
      
        
          
        
      </DemoContainer>
    </LocalizationProvider>
  );
}