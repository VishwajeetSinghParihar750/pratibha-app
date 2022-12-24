function ArrangeData(data) {
  if (!data) return;

  let toReturn = {
    totalAssets: "NA",
    totalVulnerabilities: "NA",

    assets: [],

    // need more data
    riskScore: "B",

    new: 5,
    triaged: 6,
    informative: 1,
    resolve: 4,
    rating: 6,

    // set these as "NA" normally but for now give them value
    criticalVulnerabilities: 12,
    highVulnerabilities: 7,
    mediumVulnerabilities: 19,
    lowVulnerabilities: "NA",
  };

  if (data.total_asset_count != undefined) {
    toReturn.totalAssets = data.total_asset_count;
  }
  if (data.total_vuln_count != undefined) {
    toReturn.totalVulnerabilities = data.total_vuln_count;
  }
  if (data.critical != undefined) {
    toReturn.critical = data.critical;
  }
  if (data.high != undefined) {
    toReturn.high = data.high;
  }
  if (data.medium != undefined) {
    toReturn.medium = data.medium;
  }
  if (data.low != undefined) {
    toReturn.low = data.low;
  }

  if (data.assets != undefined) {
    toReturn.assets = data.assets.map((asset) => {
      return {
        id: asset?.id || "NA",
        name: asset?.title || "NA",
        totalVulnerabilities: asset?.asset_vuln_count || "NA",
        critical: asset?.critical_vuln_count || "NA",
        medium: asset?.medium_vuln_count || "NA",
        high: asset?.high_vuln_count || "NA",
        low: asset?.low_vuln_count || "NA",

        // need more data
        rating: 5,
      };
    });
  }

  return toReturn;
}

export default ArrangeData;
