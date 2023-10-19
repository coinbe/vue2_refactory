import {
	fetchNewsList,
	fetchAsksList,
	fetchJobsList,
	fetchUserInfo,
} from '@/apis/';

export default {
	FETCH_NEWS(context) {
		fetchNewsList()
			.then(res => {
				console.log('res.data : ', res.data);
				context.commit('SET_NEWS', res.data);
			})
			.catch(err => {
				console.log(err.message);
			});
	},
	FETCH_ASKS({ commit }) {
		fetchAsksList()
			.then(res => {
				console.log('res.data : ', res.data);
				commit('SET_ASKS', res.data);
			})
			.catch(err => {
				console.log(err.message);
			});
	},
	FETCH_JOBS({ commit }) {
		fetchJobsList()
			.then(res => {
				console.log('res.data : ', res.data);
				commit('SET_JOBS', res.data);
			})
			.catch(err => {
				console.log(err.message);
			});
	},
	FETCH_USER(context, id) {
		fetchUserInfo(id)
			.then(res => {
				console.log(res.data);
				context.commit('SET_USER', res.data);
			})
			.catch(err => {
				console.log(err.message);
			});
	},
};
