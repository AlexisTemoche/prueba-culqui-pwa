import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import type { ActualBalanceResponse } from './actual.Balance.interface'
import { ApiClient } from '@/api/consumeAuthenticatedAPI'
import { useQuery } from '@tanstack/vue-query'

const apiRecharges = new ApiClient();

interface typeUseLoadActualBalance {
  isLoading: ComputedRef<Boolean>
  actualBalance: ComputedRef<String>
  refetch: Function
}

export const useLoadActualBalance = (): typeUseLoadActualBalance => {

  const fecthGetActualBalance = (): Promise<ActualBalanceResponse> => apiRecharges.get<ActualBalanceResponse>('/getActualBalance')
  const { data, refetch, isFetching  } = useQuery({
    queryKey: ['/getActualBalance'],
    queryFn: fecthGetActualBalance,
    networkMode: 'offlineFirst'
  })
    
  return {
    isLoading: computed( () => isFetching.value  ),
    actualBalance: computed( () =>  data.value ? data.value.data?.balanceCommerce:'*****'  ),
    refetch,
  }
}

export const useFinalizeActualDashboardProcess =  ():void => {
  apiRecharges.cancelRequest()
}
