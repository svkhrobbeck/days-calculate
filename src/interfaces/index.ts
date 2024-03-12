export declare namespace Months {
  export interface IToday {
    year: number;
    month: {
      order: number;
      name: {
        uz: string;
        en: string;
      };
      days: number;
      linkedWithLeap?: undefined;
    };
    day: number;
  }

  export interface IMonthInfo {
    name: { uz: null | string; en: null | string };
    order: null | number;
  }

  export interface IState {
    year: null | number;
    month: null | string;
    date: null | number;
  }
}
