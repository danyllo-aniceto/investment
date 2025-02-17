import { API_URL } from "../../constants/apiUrl";
import { IInvestment } from "../../models/IInvestment";

export default class UpdateInvestment {
  private route = `${API_URL}/investments`;

  public async update(investment: IInvestment): Promise<IInvestment> {
    const response = await fetch(`${this.route}/${investment.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(investment),
    });

    if (!response.ok) throw new Error("Erro ao atualizar investimento");
    return response.json();
  }
}
