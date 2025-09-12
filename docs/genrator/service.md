# API Service Generator Prompt

Use this prompt to generate API service files with SWR hooks:

---

## Prompt Template:

"Generate a React API service file with the following specifications:

**File Structure Requirements:**

1. Import `useSWR` from "swr"
2. Import `fetcherMuatparts` from "@/lib/axios"
3. Include a `isMockData` boolean flag (default: true)
4. Create mock data structure matching the API response
5. Create a fetcher function that:
   - Returns mock data when `isMockData` is true
   - Makes actual API call when false
6. Export a custom SWR hook

**API Details:**

- URL: [INSERT_API_ENDPOINT_HERE]
- Method: [INSERT_HTTP_METHOD_HERE]
- Mock Data: [INSERT_MOCK_DATA_STRUCTURE_HERE]

**Code Pattern to Follow:**

```javascript
import useSWR from "swr";
import { fetcherMuatparts } from "@/lib/axios";

const isMockData = true;

const apiResult = {
  data: {
    Message: {
      Code: 200,
      Text: "[SUCCESS_MESSAGE]",
    },
    Data: {
      // [MOCK_DATA_STRUCTURE]
    },
    Type: "[API_TYPE]",
  },
};

export const fetcher[ResourceName] = async () => {
  if (isMockData) {
    const result = apiResult;
    return result.data.Data;
  }

  const result = await fetcherMuatparts.[method](
    `[api_endpoint]`
  );
  return result?.data?.Data || {};
};

export const useGet[ResourceName] = () =>
  useSWR(`[unique-key]`, fetcher[ResourceName]);
```

**Naming Conventions:**

- Fetcher function: `fetcher[ResourceName]` (e.g., fetcherFleetPositions)
- Hook name: `useGet[ResourceName]` (e.g., useGetFleetPositions)
- SWR key: Use kebab-case describing the resource (e.g., 'monitoring-orders-multi-fleet-positions')

Please generate the complete service file following this pattern."

---

## Example Usage:

"Generate a React API service file with the following specifications:

**API Details:**

- URL: `v1/transporter/orders/fleet-positions`
- Method: GET
- Mock Data:

```json
{
  "fleets": [
    {
      "id": "uuid",
      "licensePlate": "AR 6666 LBA",
      "driverName": "Ahmad Masruna",
      "driverPhone": "+628123456789",
      "operationalStatus": "ON_DUTY",
      "fleetStatus": "ACTIVE",
      "sosStatus": "",
      "lastLatitude": -6.2088,
      "lastLongitude": 106.8456,
      "lastLocationUpdate": "2024-04-01T14:30:00Z",
      "orderId": "uuid",
      "orderStatus": "WAITING_CHANGE_FLEET",
      "replacementFleet": {
        "id": "uuid",
        "licensePlate": "B 1234 ABC",
        "driverName": "Budi Santoso",
        "status": "ARMADA_PENGGANTI_BERJALAN"
      }
    }
  ],
  "pagination": {
    "currentPage": 1,
    "totalPages": 5,
    "totalItems": 50,
    "itemsPerPage": 10
  }
}
```

This will generate the getFleetPositions.js service file."
