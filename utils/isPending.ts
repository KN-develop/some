import type { AsyncDataRequestStatus } from '#app';

const isPending = (status: AsyncDataRequestStatus) => toValue(status) === 'pending';
export default isPending;
