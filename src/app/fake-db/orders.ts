import { Order } from '../orders/models/order.model';

export const ORDERS: Order[] = [
  {
    id             : 1,
    reference      : '70d4d7d0',
    subtotal       : 39.97,
    tax            : 77.44,
    discount       : -10.17,
    total          : 73.31,
    date           : new Date('2018/04/25 02:07:59'),
    customer       : {
      id             : 1,
      firstName      : 'Dollie',
      lastName       : 'Bullock',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA'
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 13,
        name : 'On pre-order (not paid)',
        color: 'purple-300',
        date : new Date('2018/04/03 10:06:18')
      },
      {
        id   : 1,
        name : 'Awaiting check payment',
        color: 'blue-500',
        date : new Date('2018/03/17 18:28:37')
      }
    ],
    payment        : {
      transactionId: '2a894b9e',
      amount       : 73.31,
      method       : 'Credit Card',
      date         : new Date('2018/02/23 15:50:23')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'TNT',
        weight  : 10.44,
        fee     : 7.00,
        date    : new Date('2018/04/10 07:03:52')
      }
    ]
  },
  {
    id             : 2,
    reference      : '2003479c',
    subtotal       : 98.68,
    tax            : 45.55,
    discount       : -10.25,
    total          : 24.51,
    date           : new Date('2018/11/07 15:47:31'),
    customer       : {
      id             : 1,
      firstName      : 'Holmes',
      lastName       : 'Hines',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA'
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 2,
        name : 'Payment accepted',
        color: 'green-500',
        date : new Date('2018/10/04 08:54:33')
      },
      {
        id   : 1,
        name : 'Awaiting check payment',
        color: 'blue-500',
        date : new Date('2018/05/03 03:43:04')
      }
    ],
    payment        : {
      transactionId: '79c640c8',
      amount       : 24.51,
      method       : 'Check',
      date         : new Date('2018/04/22 04:49:49')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'USPS',
        weight  : 2.92,
        fee     : 4.00,
        date    : new Date('2018/07/11 14:57:12')
      }
    ]
  },
  {
    id             : 3,
    reference      : '09f5443b',
    subtotal       : 23.03,
    tax            : 16.36,
    discount       : -19.46,
    total          : 87.17,
    date           : new Date('2018/11/26 16:04:40'),
    customer       : {
      id             : 1,
      firstName      : 'Serena',
      lastName       : 'Glover',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 8,
        name : 'Payment error',
        color: 'red-900',
        date : new Date('2018/07/02 20:44:34')
      },
      {
        id   : 3,
        name : 'Preparing the order',
        color: 'orange-500',
        date : new Date('2018/03/23 04:59:45')
      }
    ],
    payment        : {
      transactionId: '5ff44b0c',
      amount       : 87.17,
      method       : 'PayPal',
      date         : new Date('2018/01/25 11:46:28')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'USPS',
        weight  : 7.53,
        fee     : 7.00,
        date    : new Date('2018/11/25 00:40:54')
      }
    ]
  },
  {
    id             : 4,
    reference      : '960898d0',
    subtotal       : 13.47,
    tax            : 53.45,
    discount       : -15.55,
    total          : 26.98,
    date           : new Date('2018/11/23 05:35:18'),
    customer       : {
      id             : 1,
      firstName      : 'Dianne',
      lastName       : 'Prince',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 5,
        name : 'Delivered',
        color: 'green-800',
        date : new Date('2018/10/26 16:12:47')
      },
      {
        id   : 4,
        name : 'Shipped',
        color: 'purple-500',
        date : new Date('2018/02/06 06:42:37')
      }
    ],
    payment        : {
      transactionId: '787d49b1',
      amount       : 26.98,
      method       : 'Check',
      date         : new Date('2018/03/07 05:50:57')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'FedEx',
        weight  : 11.93,
        fee     : 5.00,
        date    : new Date('2018/03/21 07:08:26')
      }
    ]
  },
  {
    id             : 5,
    reference      : '2d7f68de',
    subtotal       : 46.93,
    tax            : 12.14,
    discount       : -19.16,
    total          : 12.97,
    date           : new Date('2018/01/13 06:21:21'),
    customer       : {
      id             : 1,
      firstName      : 'Frankie',
      lastName       : 'Hewitt',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA'
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 8,
        name : 'Payment error',
        color: 'red-900',
        date : new Date('2018/02/01 09:21:46')
      },
      {
        id   : 6,
        name : 'Canceled',
        color: 'pink-500',
        date : new Date('2018/11/16 04:48:32')
      }
    ],
    payment        : {
      transactionId: 'cd8c4727',
      amount       : 12.97,
      method       : 'Bank-wire',
      date         : new Date('2018/05/15 21:15:32')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'USPS',
        weight  : 5.43,
        fee     : 3.00,
        date    : new Date('2018/01/06 00:51:59')
      }
    ]
  },
  {
    id             : 6,
    reference      : '9c991708',
    subtotal       : 32.55,
    tax            : 11.81,
    discount       : -12.33,
    total          : 30.96,
    date           : new Date('2018/01/17 04:21:08'),
    customer       : {
      id             : 1,
      firstName      : 'Cole',
      lastName       : 'Holcomb',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA',
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 3,
        name : 'Preparing the order',
        color: 'orange-500',
        date : new Date('2018/11/30 01:04:32')
      },
      {
        id   : 2,
        name : 'Payment accepted',
        color: 'green-500',
        date : new Date('2018/11/12 21:27:18')
      }
    ],
    payment        : {
      transactionId: 'a41f4b7c',
      amount       : 30.96,
      method       : 'Check',
      date         : new Date('2018/04/27 03:59:22')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'FedEx',
        weight  : 6.05,
        fee     : 4.00,
        date    : new Date('2018/09/10 11:28:47')
      }
    ]
  },
  {
    id             : 19,
    reference      : 'd460f4ff',
    subtotal       : 15.83,
    tax            : 41.90,
    discount       : -16.54,
    total          : 47.99,
    date           : new Date('2018/01/04 21:13:53'),
    customer       : {
      id             : 1,
      firstName      : 'Whitley',
      lastName       : 'Mcgee',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA'
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 7,
        name : 'Refunded',
        color: 'red-500',
        date : new Date('2018/08/10 17:14:57')
      },
      {
        id   : 5,
        name : 'Delivered',
        color: 'green-800',
        date : new Date('2018/03/30 01:38:14')
      }
    ],
    payment        : {
      transactionId: '761943c2',
      amount       : 47.99,
      method       : 'PayPal',
      date         : new Date('2018/10/11 20:10:46')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'USPS',
        weight  : 5.51,
        fee     : 5.00,
        date    : new Date('2018/08/28 21:24:36')
      }
    ]
  },
  {
    id             : 20,
    reference      : 'ba6a946d',
    subtotal       : 36.84,
    tax            : 20.12,
    discount       : -14.57,
    total          : 44.40,
    date           : new Date('2018/02/24 00:57:18'),
    customer       : {
      id             : 1,
      firstName      : 'Hood',
      lastName       : 'Hodges',
      company        : 'Saois',
      jobTitle       : 'Digital Archivist',
      email          : 'abbott@withinpixels.com',
      phone          : '+1-202-555-0175',
      invoiceAddress : '704 6th Ave, New York, NY 10010, USA',
      shippingAddress: '377 E South Omaha Bridge Rd, Council Bluffs, IA 51501, USA'
    },
    products       : [
      {
        id      : 1,
        name    : 'A Walk Amongst Friends - Canvas Print',
        price   : 10.24,
        quantity: 1,
        total   : 10.24
      },
      {
        id      : 2,
        name    : 'Lago di Braies - Canvas Print',
        price   : 24.62,
        quantity: 1,
        total   : 24.62
      },
      {
        id      : 3,
        name    : 'Never Stop Changing - Canvas Print',
        price   : 49.29,
        quantity: 1,
        total   : 49.29
      }
    ],
    status         : [
      {
        id   : 10,
        name : 'Awaiting bank wire payment',
        color: 'blue-500',
        date : new Date('2018/05/19 11:09:56')
      },
      {
        id   : 12,
        name : 'Remote payment accepted',
        color: 'green-500',
        date : new Date('2018/03/27 05:02:33')
      }
    ],
    payment        : {
      transactionId: '4af94368',
      amount       : 44.40,
      method       : 'PayPal',
      date         : new Date('2018/11/11 14:25:39')
    },
    shippingDetails: [
      {
        tracking: '',
        carrier : 'USPS',
        weight  : 3.63,
        fee     : 5.00,
        date    : new Date('2018/03/01 09:07:49')
      }
    ]
  }
];
