import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUsers, fetchUsersError, fetchUsersSuccess } from "./userSlice";

// const api = 'https://jsonplaceholder.typicode.com/users'

// export const fetchUsersAsync = async () => {
//     console.log('@@ fetchUsersAsync')
//     try {
//         const users = await fetch(api).then(x => x.json())
//         put(fetchUsersSuccess(users))
//     } catch (err: any) {
//         put(fetchUsersError(err.message))
//     }
// }

// export function* fetchUserSaga(action: ReturnType<typeof fetchUsers>): Generator<any, void, any> {
//     try {
//       const users = yield call(fetchUsers, action.payload)
//       yield put(fetchUsersSuccess(users))
//     } catch (error: any) {
//       yield put(fetchUsersError(error.message))
//     }
//   }

function* fetchUsersSaga(): Generator<any, void, any> {
    try {
      const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/users');
      const data = yield response.json();
      yield put(fetchUsersSuccess(data));
    } catch (error: any) {
      yield put(fetchUsersError(error.message));
    }
  }

export function* userSaga() {
    // yield takeLatest(fetchUsers.type, fetchUserSaga)
    yield takeEvery(fetchUsers.type, fetchUsersSaga)
}