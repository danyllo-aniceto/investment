import axios from 'axios';
import { API_URL } from '../../constants/apiUrl';
import { IBaseApi } from '../../models/IBaseApi';
import { IBasePagedApi } from '../../models/IBasePagedApi';
import { IInvestmentAPI } from '../../models/IInvestment';

export default class GetAllInvestments {
  private route = `${API_URL}/investments`;

  public async loadAll(): Promise<IBaseApi<IBasePagedApi<IInvestmentAPI>>> {
    // TODO: Substituir na integração
    const response = await axios.get(this.route, {
      params: { limit: 1, paged: 10 },
    });

    return response.data;
  }
}
