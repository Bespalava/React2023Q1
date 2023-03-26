export const mockValidForm = () => {
  return {
    name: 'Алексей',
    date: '2023-03-25',
    delivery: 'самовывоз',
    time: 'вечернее',
    image:
      '',
    agree: true,
  };
};

export const mockInvalidForm = () => {
  return [
    {
      name: '11',
      date: '2023-02-03',
      delivery: 'default',
      time: 'вечернее',
      image: '',
      agree: false,
    },
    {
      name: 'ww',
      date: '2023-03-15',
      delivery: 'default',
      time: 'дневное',
      image: '',
      agree: true,
    },
  ];
};
