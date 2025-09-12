<!-- 3. Detail Tambahan Biaya
   3.1 Get Report Detail
   GET /v1/cs/additional-cost-reports/{id}/detail

Response:

{

"success": true,

"data": {

    "report": {

      "id": "report-uuid",

      "order": {

        "code": "MT-2025-001",

        "status": "MENUNGGU PELUNASAN",

        "fleet_count": 2,

        "model": "Instan"

      },

      "shipper": {

        "id": "shipper-uuid",

        "type": "user02",

        "company_name": "PT Shipper Example",

        "logo": "https://cdn.muattrans.com/logos/shipper.jpg",

        "phone": "081234567890",

        "location": "Jakarta Selatan, DKI Jakarta"

      },

      "transporters": [

        {

          "id": "transporter-uuid",

          "name": "PT Transporter ABC",

          "logo": "https://cdn.muattrans.com/logos/transporter.jpg",

          "fleet_count": 2,

          "phone": "081987654321",

          "location": "Tangerang, Banten"

        }

      ],

      "contact_summary": {

        "last_contacted_by": "CS John Doe",

        "last_contacted_at": "2025-01-20T14:30:00Z",

        "total_contacts": 3,

        "days_unpaid": 5

      },

      "cost_breakdown": {

        "waiting_time_cost": 200000,

        "overload_cost": 150000,

        "admin_fee": 50000,

        "tax_amount": 100000,

        "total_amount": 500000

      },

      "payment_deadline": "2025-02-15T23:59:59Z"

    }

}

} -->

<!-- 3.2 Get Waiting Time Details
GET /v1/cs/additional-cost-reports/{id}/waiting-time-details

Response:

{

"success": true,

"data": {

    "drivers": [

      {

        "id": "driver-uuid",

        "name": "Driver Name",

        "license_plate": "B 1234 XYZ",

        "transporter_name": "PT Transporter ABC",

        "waiting_locations": [

          {

            "location_type": "LOKASI MUAT 1",

            "duration": "2 Jam 30 Menit",

            "start_time": "2025-01-15T08:00:00Z",

            "end_time": "2025-01-15T10:30:00Z",

            "cost": 100000

          }

        ],

        "total_cost": 200000

      }

    ],

    "grand_total": 200000

}

} -->

<!-- 3.3 Get Overload Details
GET /v1/cs/additional-cost-reports/{id}/overload-details

Response:

{

"success": true,

"data": {

    "drivers": [

      {

        "id": "driver-uuid",

        "name": "Driver Name",

        "license_plate": "B 1234 XYZ",

        "transporter_name": "PT Transporter ABC",

        "overload_locations": [

          {

            "location_type": "LOKASI MUAT 1",

            "overload_weight": 500,

            "weight_unit": "kg",

            "cost": 75000,

            "loading_date": "2025-01-15T10:00:00Z"

          }

        ],

        "total_cost": 150000

      }

    ],

    "grand_total": 150000

}

} -->

<!-- 5.5 Get Potential Earnings List

Endpoint: GET /v1/transporter/earnings/potential-earnings
LD References: LD-75, LD-75a, LD-75.1, LD-75.1a, LD-75.2, LD-75.3, LD-75.4, LD-75.5, LD-75.6, LD-75.7, LD-75.8, LD-75.9, LD-75.10, LD-75.11, LD-75.12, LD-75.13, LD-75.14, LD-75.15, LD-75.16, LD-75.17

Query Parameters
Parameters
| Parameter | Tipe | Required | Default |Deskripsi |
| :------- | :---- | :---- | :---- | :-------------------------- |
| page | interger | No | 1 |Page Number |
| limit | integer | No | 10 |Items per page (10, 20, 40)|
| search | string | No | - |Search in order number, customer (min 3 chars) |
| status | string | No | all |Status filter (all, pending, processing) |
| sort | string | No | createdAt |Sort field (createdAt, amount, orderNumber)|
| order | string | No | desc |Sort direction (asc,desc) |

Response Success (200 OK) - With Data
{
“Message”: {“Code”: 200, “Text”: “Potential earnings retrieved successfully”},
“Data”: {
“earnings”: [
{
“earningId”: “EARN-2025-001”, // [dbt_mt_earnings.earning_id]
“orderId”: “ORD-2025-001234”, // [dbt_mt_earnings.order_id]
“orderNumber”: “MTO240122001”, // [dbt_mt_orders.order_number]
“customerName”: “PT Maju Jaya”, // [dbt_mt_orders.customer_name]
“route”: “Jakarta - Surabaya”,
“completedDate”: “2025-01-22T16:00:00Z”, // [dbt_mt_orders.completed_at]
“potentialAmount”: 2700000, // [dbt_mt_earnings.potential_amount]
“status”: “pending”, // [dbt_mt_earnings.status]
“statusTooltip”: “Armada kamu telah tercatat untuk pesanan ini, harap menunggu maks. 1 jam untuk konfirmasi dari shipper.”,
“estimatedDisbursement”: “2025-01-25T00:00:00Z”,
“requiresAction”: false,
“actionType”: null,
“hoverEffects”: {
“detailButton”: {“hoverColor”: “#e2e8f0”, “cursorType”: “pointer”}
}
}
],
“pagination”: {
“currentPage”: 1,
“totalPages”: 3,
“totalItems”: 25,
“itemsPerPage”: 10,
“hasNextPage”: true,
“hasPrevPage”: false,
“showEllipsis”: false // true if totalPages > 5
},
“summary”: {
“totalPotential”: 67500000,
“pendingCount”: 15,
“processingCount”: 10,
“averageAmount”: 2700000
},
“filters”: {
“activeStatus”: “all”,
“activeSort”: “createdAt”,
“activeSortDirection”: “desc”,
“activeSearch”: ““,
”appliedFilters”: []
},
“searchState”: {
“searchHover”: false,
“searchFocused”: false,
“minCharacters”: 3
},
“sortingState”: {
“availableColumns”: [“orderNumber”, “potentialAmount”, “status”],
“activeSortColumn”: “createdAt”,
“activeSortDirection”: “desc”,
“sortIcons”: {
“ascending”: “arrow-up-active”,
“descending”: “arrow-down-active”,
“default”: “arrow-up-down”
}
}
},
“Type”: “POTENTIAL_EARNINGS_LIST”
}
Response Success (200 OK) - No Data
LD References: LD-75.1, LD-75.1a
{
“Message”: {“Code”: 200, “Text”: “No potential earnings found”},
“Data”: {
“earnings”: [],
“pagination”: {“currentPage”: 1, “totalPages”: 0, “totalItems”: 0, “itemsPerPage”: 10},
“emptyState”: {
“illustration”: “empty_folder”,
“title”: “Oops, potensi pendapatan masih kosong”,
“subtitle”: “Mulai terima permintaan sekarang untuk menampilkan data potensi pendapatan disini”,
“actionButton”: {
“text”: “Lihat Permintaan”,
“url”: “/monitoring”,
“hoverColor”: “#f5c842”
}
},
“summary”: {“totalPotential”: 0, “pendingCount”: 0, “processingCount”: 0, “averageAmount”: 0}
},
“Type”: “POTENTIAL_EARNINGS_EMPTY”
}
Response Success (200 OK) - Search Results Found
LD References: LD-75.8
{
“Message”: {“Code”: 200, “Text”: “Search results found”},
“Data”: {
“earnings”: [/* filtered results */],
“searchState”: {
“searchTerm”: “MTO240122”,
“resultsFound”: true,
“searchActive”: true
},
“filters”: {
“activeSearch”: “MTO240122”
}
},
“Type”: “POTENTIAL_EARNINGS_SEARCH_FOUND”
}
Response Success (200 OK) - Search No Results
LD References: LD-75.9
{
“Message”: {“Code”: 200, “Text”: “No search results found”},
“Data”: {
“earnings”: [],
“emptyState”: {
“illustration”: “magnifying_glass”,
“title”: “Keyword Tidak Ditemukan”,
“filterButtonDisabled”: true
},
“searchState”: {
“searchTerm”: “NOTFOUND”,
“resultsFound”: false,
“searchActive”: true
}
},
“Type”: “POTENTIAL_EARNINGS_SEARCH_EMPTY” -->
<!-- } -->

<!-- 5.8 Get Pending Disbursement Report
Endpoint: GET /v1/transporter/earnings/pending-disbursement LD References: LD-76
Response Success (200 OK)
{
“Message”: {“Code”: 200, “Text”: “Pending disbursement report retrieved”},
“Data”: {
“summary”: {
“pendingAmount”: 2250000, // [dbt_mt_earnings.pending_amount]
“pendingOrders”: 5, // [dbt_mt_orders.status = ‘pending_disbursement’]
“averageWaitTime”: 3.2, // days
“oldestPending”: “2025-01-18T14:30:00Z”
},
“breakdown”: [
{
“orderId”: “ORD-2025-001234”,
“orderNumber”: “MTO240122001”,
“completedDate”: “2025-01-18T16:00:00Z”,
“route”: “Jakarta - Surabaya”,
“pendingAmount”: 2700000,
“daysPending”: 4,
“estimatedDisbursement”: “2025-01-25T00:00:00Z”,
“status”: “pending_disbursement”
}
],
“filterStatus”: “pending_disbursement”
},
“Type”: “PENDING_DISBURSEMENT_REPORT”
} -->

<!-- 5.7 Apply Potential Earnings Filter

Endpoint: POST /v1/transporter/earnings/potential-earnings/filter LD References: LD-75.10, LD-75.11, LD-75.12, LD-75.13, LD-75.14, LD-75.15, LD-75.16, LD-75.17

Request Body
{
“filters”: {
“status”: [“pending”, “processing”], // array of statuses
“dateFrom”: “2025-01-01”,
“dateTo”: “2025-01-31”
}
}
Response Success (200 OK) - Filter Results Found
LD References: LD-75.15
{
“Message”: {“Code”: 200, “Text”: “Filter applied successfully”},
“Data”: {
“earnings”: [/* filtered results */],
“filterState”: {
“filtersActive”: true,
“appliedFilters”: [
{“type”: “status”, “value”: “pending”, “label”: “Pending”, “removable”: true}
],
“filterButton”: {
“active”: true,
“color”: “#3182ce”, // blue when filters active
“outline”: true
},
“clearAllFilters”: {
“visible”: true,
“text”: “Hapus Semua Filter”
}
}
},
“Type”: “POTENTIAL_EARNINGS_FILTER_FOUND”
}
Response Success (200 OK) - Filter No Results
LD References: LD-75.16
{
“Message”: {“Code”: 200, “Text”: “No results for applied filters”},
“Data”: {
“earnings”: [],
“emptyState”: {
“illustration”: “magnifying_glass”,
“title”: “Data Tidak Ditemukan. Mohon coba hapus atau mengubah filter.”,
“searchFieldDisabled”: true
},
“filterState”: {
“filtersActive”: true,
“appliedFilters”: [
{“type”: “status”, “value”: “completed”, “label”: “Completed”, “removable”: true}
]
},
“summary”: {“totalPotential”: 0}
},
“Type”: “POTENTIAL_EARNINGS_FILTER_EMPTY”
}
Response Success (200 OK) - Combined Search + Filter No Results
LD References: LD-75.17
{
“Message”: {“Code”: 200, “Text”: “No results for search and filter combination”},
“Data”: {
“earnings”: [],
“emptyState”: {
“illustration”: “magnifying_glass”,
“title”: “Data Tidak Ditemukan. Mohon coba hapus atau mengubah filter.”
},
“searchState”: {
“searchTerm”: “MTO240122”,
“searchActive”: true
},
“filterState”: {
“filtersActive”: true,
“appliedFilters”: [
{“type”: “status”, “value”: “completed”, “label”: “Completed”, “removable”: true}
]
},
“summary”: {“totalPotential”: 0}
},
“Type”: “POTENTIAL_EARNINGS_SEARCH_FILTER_EMPTY”
} -->

17. Upload Dokumen Arsip

Deskripsi
Mengunggah dokumen arsip untuk pesanan dengan validasi format dan ukuran

Endpoint
POST /v1/cs/orders/{orderId}/archive-documents

LD References
LDCK-21A.1-21A.7 - Popup unggah dokumen arsip dengan validasi
LDCK-21A.2-21A.3 - Multiple file upload

Path Parameters
| Parameter | Tipe | Wajib | Deskripsi |
| :------- | :---- | :---- | :---- | :-------------------------- |
| orderId | String | ya | ID pesanan |
Parameter
Tipe
Wajib
Deskripsi
orderId
string
Ya
ID pesanan

Request Body (Multipart/form-data)
files: [File] (Required, max 5 files)

notes: string (Optional, max 255 characters)

category: string (Required: archive/receipt/supporting)
Response Success (200 OK)
{

"Message": {

    "Code": 200,

    "Text": "Archive documents uploaded successfully"

},

"Data": {

    "uploadedDocuments": [

      {

        "id": "[dbt_mt_order_documents.id]",

        "fileName": "[dbt_mt_order_documents.fileName]",

        "filePath": "[dbt_mt_order_documents.filePath]",

        "fileSize": 2547392,

        "fileType": "application/pdf",

        "uploadedAt": "[dbt_mt_order_documents.uploadedAt]",

        "isArchived": "[dbt_mt_order_documents.isArchived]"

      }

    ],

    "orderUpdates": {

      "documentStatus": "uploaded",

      "archivedDocumentCount": 3,

      "lastDocumentUpdate": "[dbt_mt_order_documents.uploadedAt]"

    },

    "storage": {

      "totalSize": 7642176,

      "allowedSize": 52428800,

      "remainingQuota": 44786624

    },

    "processing": {

      "virusScanned": true,

      "thumbnailGenerated": true,

      "searchIndexed": true

    }

},

"Type": "CS_ARCHIVE_DOCUMENTS_UPLOADED"

}
Error Response (400 Bad Request)
{

"Message": {

    "Code": 400,

    "Text": "Document upload validation failed"

},

"Data": {

    "errors": [

      {

        "file": "document1.txt",

        "field": "fileType",

        "message": "Format file tidak sesuai ketentuan. Hanya jpg/png/pdf/zip yang diperbolehkan"

      },

      {

        "file": "document2.pdf",

        "field": "fileSize",

        "message": "Ukuran file maksimal 10MB"

      },

      {

        "field": "notes",

        "message": "Catatan dokumen maksimal 255 karakter"

      }

    ],

    "validationRules": {

      "allowedFormats": ["jpg", "jpeg", "png", "pdf", "zip"],

      "maxFileSize": 10485760,

      "maxFiles": 5,

      "maxNotesLength": 255

    }

},

"Type": "CS_ARCHIVE_UPLOAD_ERROR"

}
