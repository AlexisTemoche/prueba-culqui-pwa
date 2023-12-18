import { computed } from 'vue'
import type { ComputedRef } from 'vue'
import { ApiClient } from '@/api/consumeAuthenticatedAPI'
import type { Company, ProvidersListResponse } from './recharges.interface'
import { useQuery } from '@tanstack/vue-query'

interface typeUseLoadProvidersList {
  isLoading: ComputedRef<Boolean>
  listOfProviders: ComputedRef<Company[]>
}

const apiActualBalance = new ApiClient();

export const useLoadProvidersList = (): typeUseLoadProvidersList => {
  
  const fetchGetProvidersList = (): Promise<ProvidersListResponse> => apiActualBalance.get<ProvidersListResponse>('/getProviders')
  const { data, isFetching  } = useQuery({
    queryKey: ['/getProviders'],
    queryFn: fetchGetProvidersList,
    networkMode: 'offlineFirst'
  })
  
  return {
    isLoading: computed(() => isFetching.value),
    listOfProviders: computed(() => data.value ? data.value.data.companies : [])
  }
}

export const useFinalizeRechargesProcess = (): void => {
  apiActualBalance.cancelRequest()
}
