import { IPaginationSearchParams, IServerPageDefaultProps, ISortSearchParams } from '@/types/common';

type SummarySearchParams = Partial<IPaginationSearchParams & ISortSearchParams>;

export interface ISummaryPageProps extends IServerPageDefaultProps<void, SummarySearchParams> {}
