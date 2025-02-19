import axios from 'axios';
import { API_URL } from '../../constants/apiUrl';
import { IBaseApi } from '../../models/IBaseApi';

export default class DeleteInvestment {
  private route = `${API_URL}/investments`;

  public async delete(id: number): Promise<IBaseApi<null>> {
    const response = await axios.delete<IBaseApi<null>>(`${this.route}/${id}`);

    return response.data;
  }
}
