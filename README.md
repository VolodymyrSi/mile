## _For MileStep_

### Tech stack:
- html / css / js
- react with hooks (`useState`, `UseEffect`, `useRef`)
- axios
- version control with
  - *github*
- deployed with
  - *github pages*


### Details:

The web app consists of a single page and 3 components: `UserContainer`, `UserCard` and `FilterContainer`.


|   | FilterContainer   | UserContainer  |  UserCard |
|---|---|---|---|
| Components include  | 2 `select` dropdown menues and a `submit` button  | 15 `UserCard`  items based on server data | profile description based on server data |
| Data source  |  pre-selects options based on localStorage data | Axios async request | Receives data as props from `UserContainer` |
| Shared State | userData |userData|userData|


### Tech side:

1. Axios sends a request with a customizable API URL which depends on filters.
    - It always requests **15 users**
    - If **gender** filter is applied, the URL is modified to ask server for specific gender data
    - If **nationality** filter is applied, the URL is modified to ask server for specific nationality data
2. `UserContainer` component renders `UserCard` elements with `map` function. It displays the following:
    - Image
    - Name
    - Email
    - Date of birth (through function in `./src/components/utis/dateHelper`)
    - Nationality **only if** filter is applied
3. If user applies filters:
    - the filter values are stored in `local storage` so they still apply upon refreshing the page
    - `userData` state is uploaded according to selected values to display requested values
    - `axios` request url is modified
