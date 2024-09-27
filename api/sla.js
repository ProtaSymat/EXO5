export default function(req, res) {
    if (req.method === 'POST') {
      const { sla, period } = req.body;
      if (!sla || !period || isNaN(sla) || !['yearly', 'quarterly', 'monthly', 'daily'].includes(period)) {
        return res.status(400).json({ status: "error", reason: "bad parameters" });
      }
      
      const response = {
        status: "success",
        data: { nbHours: 12, nbMinutes: 13, nbSeconds: 14 }
      };
      
      res.status(200).json(response);
    } else {
      res.status(405).json({ status: "error", reason: "Method not allowed" });
    }
  }