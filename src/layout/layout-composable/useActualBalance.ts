import { computed } from 'vue'
import type { ActualBalanceResponse } from './actual.Balance.interface'
import { ApiClient } from '@/api/consumeAuthenticatedAPI'
import { useQuery } from '@tanstack/vue-query'

const apiRecharges = new ApiClient();

export const useLoadActualBalance = (): any => {


  const fetchGroups = (): Promise<ActualBalanceResponse> => apiRecharges.get<ActualBalanceResponse>('/getActualBalance')
  const { data, refetch, isFetching  } = useQuery({
    queryKey: ['/getActualBalance'],
    queryFn: fetchGroups,
    networkMode: 'offlineFirst'
  })
    
  return {
    isLoading: computed( () => isFetching.value  ),
    actualBalance: computed( () =>  data.value ? data.value.data.balanceCommerce:''  ),
    refetch,
  }
}

export const useFinalizeActualDashboardProcess =  ():void => {
  apiRecharges.cancelRequest()
}
