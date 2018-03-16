import Route from '@ember/routing/route';
export default Route.extend({

  // redirect: function () {
  //   this.transitionTo('login');
  // },
  beforeModel() {
    this.store.push({
      data:[{
        id:1,
        type:'result',
        attributes: {
          userSelection:' '
        }
      },{
        id:2,
        type:'result',
        attributes: {
          userSelection:' '
        }
      },{
        id:3,
        type:'result',
        attributes: {
          userSelection:' '
        }
      },{
        id:4,
        type:'result',
        attributes: {
          userSelection:' '
        }
      },{
        id:5,
        type:'result',
        attributes: {
          userSelection:' '
        }
      }]
    }),
    this.store.push({
      data: [{
        id: 1,
        type:'option',
        attributes: {
          option:'2',
        },relationships: {
          question:{
            data:{
              id:1,
              type:'question'
            }
          }
        }
      },
      {
        id: 2,
        type:'option',
        attributes: {
          option:'10'
        },relationships: {
          question:{
            data:{
              id:1,
              type:'question'
            }
          }
        }
      },
      {
        id: 3,
        type:'option',
        attributes: {
          option:'15'
        },relationships: {
          question:{
            data:{
              id:1,
              type:'question'
            }
          }
        }
      },
      {
        id: 4,
        type:'option',
        attributes: {
          option:'20'
        },relationships: {
          question:{
            data:{
              id:1,
              type:'question'
            }
          }
        }
      },
      {
        id: 5,
        type:'option',
        attributes: {
          option:'25'
        },relationships: {
          question:{
            data:{
              id:1,
              type:'question'
            }
          }
        }
      },{
        id: 6,
        type:'option',
        attributes: {
          option:'3'
        },relationships: {
          question:{
            data:{
              id:2,
              type:'question'
            }
          }
        }
      },{
        id: 7,
        type:'option',
        attributes: {
          option:'6'
        },relationships: {
          question:{
            data:{
              id:2,
              type:'question'
            }
          }
        }
      },{
        id: 8,
        type:'option',
        attributes: {
          option:'9'
        },relationships: {
          question:{
            data:{
              id:2,
              type:'question'
            }
          }
        }
      },{
        id: 9,
        type:'option',
        attributes: {
          option:'12'
        },relationships: {
          question:{
            data:{
              id:2,
              type:'question'
            }
          }
        }
      },{
        id: 10,
        type:'option',
        attributes: {
          option:'18'
        },relationships: {
          question:{
            data:{
              id:2,
              type:'question'
            }
          }
        }
      },{
        id: 11,
        type:'option',
        attributes: {
          option:'20'
        },relationships: {
          question:{
            data:{
              id:3,
              type:'question'
            }
          }
        }
      },{
        id: 12,
        type:'option',
        attributes: {
          option:'30'
        },relationships: {
          question:{
            data:{
              id:3,
              type:'question'
            }
          }
        }
      },{
        id: 13,
        type:'option',
        attributes: {
          option:'40'
        },relationships: {
          question:{
            data:{
              id:3,
              type:'question'
            }
          }
        }
      },{
        id: 14,
        type:'option',
        attributes: {
          option:'50'
        },relationships: {
          question:{
            data:{
              id:3,
              type:'question'
            }
          }
        }
      },{
        id: 15,
        type:'option',
        attributes: {
          option:'64'
        },relationships: {
          question:{
            data:{
              id:3,
              type:'question'
            }
          }
        }
      },{
        id: 16,
        type:'option',
        attributes: {
          option:'72'
        },relationships: {
          question:{
            data:{
              id:4,
              type:'question'
            }
          }
        }
      },{
        id: 17,
        type:'option',
        attributes: {
          option:'99'
        },relationships: {
          question:{
            data:{
              id:4,
              type:'question'
            }
          }
        }
      },{
        id: 18,
        type:'option',
        attributes: {
          option:'108'
        },relationships: {
          question:{
            data:{
              id:4,
              type:'question'
            }
          }
        }
      },{
        id: 19,
        type:'option',
        attributes: {
          option:'134'
        },relationships: {
          question:{
            data:{
              id:4,
              type:'question'
            }
          }
        }
      },{
        id: 20,
        type:'option',
        attributes: {
          option:'156'
        },relationships: {
          question:{
            data:{
              id:4,
              type:'question'
            }
          }
        }
      },{
        id: 21,
        type:'option',
        attributes: {
          option:'4'
        },relationships: {
          question:{
            data:{
              id:5,
              type:'question'
            }
          }
        }
      },{
        id: 22,
        type:'option',
        attributes: {
          option:'5'
        },relationships: {
          question:{
            data:{
              id:5,
              type:'question'
            }
          }
        }
      },{
        id: 23,
        type:'option',
        attributes: {
          option:'6'
        },relationships: {
          question:{
            data:{
              id:5,
              type:'question'
            }
          }
        }
      },{
        id: 24,
        type:'option',
        attributes: {
          option:'7'
        },relationships: {
          question:{
            data:{
              id:5,
              type:'question'
            }
          }
        }
      },{
        id: 25,
        type:'option',
        attributes: {
          option:' 8'
        },relationships: {
          question:{
            data:{
              id:5,
              type:'question'
            }
          }
        }
      }]
    });

    this.store.push({
      data: [{
        id: 1,
        type: 'question',
        attributes: {
          question: 'What is 2*5'
        },
        relationships:{
          correctAnswer:{
            data:{
              id:2,
              type:'option'
            }
          },options:{
            data:[{
              id: 1,
              option:'2',
              type:'option'
            },{
              id: 2,
              option:'10',
              type:'option'
            },{
              id: 3,
              option:'15',
              type:'option'
            },{
              id: 4,
              option:'20',
              type:'option'
            },{
              id: 5,
              option:'25',
              type:'option'
            }],
          }
        }
      }, {
        id: 2,
        type: 'question',
        attributes: {
          question: 'What is 3*6'
        },
        relationships:{
          correctAnswer:{
            data:{
              id:10,
              type:'option'
            }
          },options:{
            data:[{
              id: 6,
              option:'3',
              type:'option'
            },{
              id: 7,
              option:'6',
              type:'option'
            },{
              id: 8,
              option:'9',
              type:'option'
            },{
              id: 9,
              option:'12',
              type:'option'
            },{
              id: 10,
              option:'18',
              type:'option'
            }],
          }
        }
      },{
        id: 3,
        type: 'question',
        attributes: {
          question: 'What is 8*8'
        },
        relationships:{
          correctAnswer:{
            data:{
              id:15,
              type:'option'
            }
          },options:{
            data:[{
              id: 11,
              option:'20',
              type:'option'
            },{
              id: 12,
              option:'30',
              type:'option'
            },{
              id: 13,
              option:'40',
              type:'option'
            },{
              id: 14,
              option:'50',
              type:'option'
            },{
              id: 15,
              option:'64',
              type:'option'
            }],
          }
        }
      },{
        id: 4,
        type: 'question',
        attributes: {
          question: 'What is 8*9'
        },
        relationships:{
          correctAnswer:{
            data:{
              id:16,
              type:'option'
            }
          },options:{
            data:[{
              id: 16,
              option:'3',
              type:'option'
            },{
              id: 17,
              option:'6',
              type:'option'
            },{
              id: 18,
              option:'9',
              type:'option'
            },{
              id: 19,
              option:'12',
              type:'option'
            },{
              id: 20,
              option:'18',
              type:'option'
            }],
          }
        }
      },{
        id: 5,
        type: 'question',
        attributes: {
          question: 'What is 1*7'
        },
        relationships:{
          correctAnswer:{
            data:{
              id:24,
              type:'option'
            }
          },options:{
            data:[{
              id: 21,
              option:'4',
              type:'option'
            },{
              id: 22,
              option:'5',
              type:'option'
            },{
              id: 23,
              option:'6',
              type:'option'
            },{
              id: 24,
              option:'7',
              type:'option'
            },{
              id: 25,
              option:'8',
              type:'option'
            }],
          }
        }
      }]
    });
    return this.get('store');
  }
});
