import { TiTopHeadlinesParams, TiTopHeadlinesResponse } from "@/types";
import { httpClient } from "./core";

const ENDPOINT = "top-headlines";

const getList = (
  params: TiTopHeadlinesParams
): Promise<TiTopHeadlinesResponse> =>
  httpClient
    .get<TiTopHeadlinesResponse>(ENDPOINT, { params })
    .then((res) => res.data);

export default { getList };
