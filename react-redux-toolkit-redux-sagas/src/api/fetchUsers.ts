import { call, put } from "redux-saga/effects"
import { fetchUsersError, fetchUsersSuccess } from "../store/userSlice"

const api = 'https://jsonplaceholder.typicode.com/users'

export const fetchUsers = async () => {
    try {
        const users = await fetch(api).then(x => x.json())
        put(fetchUsersSuccess(users))
    } catch (err: any) {
        put(fetchUsersError(err.message))
    }
}

// function* fetchUsers() {
//     try {
//       const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
//       const data = yield response.json();
//       yield put(fetchUsersSuccess(data));
//     } catch (error) {
//       yield put(fetchUsersFailure(error.message));
//     }
//   }