import axios from 'axios';
import { API_URL } from '../../constants/apiUrl';
import { IInvestment } from '../../models/IInvestment';
import { IBaseApi } from '../../models/IBaseApi';

export default class CreateInvestment {
  private route = `${API_URL}/investments`;

  public async create(investment: IInvestment): Promise<IBaseApi<IInvestment>> {
    const response = await axios.post<IBaseApi<IInvestment>>(this.route, investment);

    return response.data;
  }
}
