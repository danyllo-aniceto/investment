import axios from 'axios';
import { API_URL } from '../../constants/apiUrl';
import { IInvestment } from '../../models/IInvestment';
import { IBaseApi } from '../../models/IBaseApi';

export default class UpdateInvestment {
  private route = `${API_URL}/investments`;

  public async update(investment: IInvestment): Promise<IBaseApi<IInvestment>> {
    const response = await axios.put<IBaseApi<IInvestment>>(
      `${this.route}/${investment.id}`,
      investment
    );

    return response.data;
  }
}
