import * as migration_20260509_235344 from './20260509_235344';
import * as migration_20260530_161521_add_vehicle_class from './20260530_161521_add_vehicle_class';

export const migrations = [
  {
    up: migration_20260509_235344.up,
    down: migration_20260509_235344.down,
    name: '20260509_235344',
  },
  {
    up: migration_20260530_161521_add_vehicle_class.up,
    down: migration_20260530_161521_add_vehicle_class.down,
    name: '20260530_161521_add_vehicle_class'
  },
];
