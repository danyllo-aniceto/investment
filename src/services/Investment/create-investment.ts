import { API_URL } from "../../constants/apiUrl";
import { IInvestment } from "../../models/IInvestment";

export default class CreateInvestment {
  private route = `${API_URL}/investments`;

  public async create(investment: Omit<IInvestment, "id">): Promise<IInvestment> {
    const response = await fetch(this.route, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(investment),
    });

    if (!response.ok) throw new Error("Erro ao criar investimento");
    return response.json();
  }
}
