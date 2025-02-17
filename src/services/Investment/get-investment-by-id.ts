import { API_URL } from "../../constants/apiUrl";
import { IInvestment } from "../../models/IInvestment";

export default class GetInvestmentById {
  private route = `${API_URL}/investments`;

  public async loadInvestment(id: number): Promise<IInvestment> {
    const response = await fetch(`${this.route}/${id}`);
    if (!response.ok) throw new Error("Erro ao buscar investimento");
    return response.json();
  }
}
