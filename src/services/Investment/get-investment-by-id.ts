import axios from 'axios';
import { API_URL } from '../../constants/apiUrl';
import { IInvestment } from '../../models/IInvestment';
import { IBaseApi } from '../../models/IBaseApi';

export default class GetInvestmentById {
  private route = `${API_URL}/investments`;

  public async loadById(id: string): Promise<IBaseApi<IInvestment>> {
    const response = await axios.get<IBaseApi<IInvestment>>(`${this.route}/${id}`);

    return response.data;
  }
}
