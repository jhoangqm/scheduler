// const { assert } = require('chai');
// const updateSpots = require('../updateSpots');

// describe('Update Spots Tests for bookInterview (create)', function () {
//   const oldState = require('./testState.json');
//   const state = JSON.parse(JSON.stringify(oldState));

//   const id = 1;
//   const interview = { student: 'Test Student', interviewer: 99 };
//   const appointment = {
//     ...state.appointments[id],
//     interview: { ...interview },
//   };
//   const appointments = { ...state.appointments, [id]: appointment };
//   const days = updateSpots(state, appointments, id);

//   it('should update spots to 1 ', function () {
//     assert.isDefined(days[0]);
//     assert.equal(days[0].spots, 1);
//   });

//   it('should update spots and not change original days array', function () {
//     assert.isDefined(days[0]);
//     assert.equal(days[0].spots, 1);
//     assert.deepEqual(state.days, oldState.days);
//   });
// });

// describe('Update Spots Tests for bookInterview (update)', function () {
//   const oldState = require('./testState.json');
//   const state = JSON.parse(JSON.stringify(oldState));

//   const id = 3;
//   const interview = { student: 'Test Student', interviewer: 99 };
//   const appointment = {
//     ...state.appointments[id],
//     interview: { ...interview },
//   };
//   const appointments = { ...state.appointments, [id]: appointment };
//   const days = updateSpots(state, appointments, id);

//   it('should keep spots at 2 ', function () {
//     assert.isDefined(days[0]);
//     assert.equal(days[0].spots, 2);
//   });

//   it('should update spots and not change original days array', function () {
//     assert.isDefined(days[0]);
//     assert.equal(days[0].spots, 2);
//     assert.deepEqual(state.days, oldState.days);
//   });
// });

// describe('Update Spots Tests for cancelInterview (delete)', function () {
//   const oldState = require('./testState.json');
//   const state = JSON.parse(JSON.stringify(oldState));

//   const id = 3;
//   const interview = null;
//   const appointment = { ...state.appointments[id], interview };
//   const appointments = { ...state.appointments, [id]: appointment };
//   const days = updateSpots(state, appointments, id);

//   it('should update spots to 3 ', function () {
//     assert.isDefined(days[0]);
//     assert.equal(days[0].spots, 3);
//   });

//   it('should update spots and not change original days array', function () {
//     assert.isDefined(days[0]);
//     assert.equal(days[0].spots, 3);
//     assert.deepEqual(state.days, oldState.days);
//   });
// });
