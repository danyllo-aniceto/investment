import { API_URL } from "../../constants/apiUrl";
import { IInvestment } from "../../models/IInvestment";

export default class GetAllInvestments {
  private route = `${API_URL}/investments`;

  public async loadAll(): Promise<Array<IInvestment>> {
    const response = await fetch(this.route);
    if (!response.ok) throw new Error("Erro ao buscar investimentos");
    return response.json();
  }
}
