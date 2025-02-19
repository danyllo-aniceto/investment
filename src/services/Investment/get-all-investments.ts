import axios from 'axios';
import { API_URL } from '../../constants/apiUrl';
import { IInvestmentPagedResponseApi } from '../../models/IInvestment';

export default class GetAllInvestments {
  private route = `${API_URL}/investments`;

  public async loadAll(paged: number, limit: number = 10): Promise<IInvestmentPagedResponseApi> {
    const response = await axios.get<IInvestmentPagedResponseApi>(this.route, {
      params: { paged, limit },
    });

    return response.data;
  }
}
