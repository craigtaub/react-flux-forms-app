# React-Flux forms app (js/non-js forms and Store)

- Server + Client side rendering via ISO - DONE
- Stores and actions via ALT - DONE
- Make /edit use action + update store- DONE
- Transient + Persistent - TODO

## Maybe
Make ajax to /api route and update store on response..Flux - TODO
- not really needed as action can easily be sync/async

##  Issues:
1) without listener on parent updates to store dont cause re-render
SOLVED SO parent needs listener to store.

2) got to not update until POST form
BUT input wont change unless property changes..
SO dont have input value as data value
BUT then on page load wont show..
SOLVED move store to state on load, state updated on change, store updated on submit.

3) non-js, post edit, show error + previous post data in form..
ALT doesnt work non-js.
BUT dont seem to be able to update store on server.
WHY doesnt getState() get seedData
SOLVED need seedData to be same name as store so DataStore.data

## Supposed issues:
1) js enabled, get error, move away and come back
- SOLU: data in state till can submit, when submit saved, till then errors + data lost when move away

2) js disabled, submit and have error, show post data and error.
- SOLU: having store seed data means on server POST can set seed data and re-render page.
- all page loads will get from db

## Solutions:
1 Store holding data + errors.
Listener to Store on Parent/smart component.
Each component loads data+errors into local State when loads.
On submit actions updates Store (js).
On submit form, if validation errors update store seedData with transient data OR update + show db data (non-js).
