// import { API_URL } from "../../constants/apiUrl";
import { allInvestmentsMock } from '../../mock/allInvestmentsMock';
import { IInvestmentAPI } from '../../models/IInvestment';
import { simulatorApiRequest } from '../../utils/simulatorApiRequest';

export default class GetAllInvestments {
  // private route = `${API_URL}/investments`;

  public async loadAll(): Promise<Array<IInvestmentAPI>> {
    // TODO: Substituir na integração
    // const response = await fetch(this.route);
    // if (!response.ok) throw new Error("Erro ao buscar investimentos");
    // return response.json();

    const response = await simulatorApiRequest(allInvestmentsMock, false);
    return response;
  }
}
