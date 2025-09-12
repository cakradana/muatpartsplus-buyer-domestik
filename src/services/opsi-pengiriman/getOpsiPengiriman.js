import useSWR from "swr";

import { fetcherMuatparts } from "@/lib/axios";

const isMockData = true;

const apiResult = {
  data: {
    Message: {
      Code: 200,
      Text: "Success",
    },
    Data: {
      sections: [
        {
          id: "instant",
          title: "Instant",
          activeCount: 2,
          description:
            "Pengiriman di hari yang sama dengan durasi paling lama 6-8 jam sejak paket di kirim oleh kurir.",
          items: [
            {
              id: "gojek-instant",
              name: "Gojek Instant",
              logo: "/images/logos/gojek.png",
              enabled: true,
              description: "",
            },
            {
              id: "grab-express-instant",
              name: "Grab Express Instant",
              provider: "Grab",
              logo: "/images/logos/grab-express.png",
              enabled: true,
              description: `
                <div>
                  <p>Grab Instant adalah jasa kirim dari Gojek yang menawarkan pengiriman dan pelayanan secara langsung (instan), dengan estimasi waktu pengiriman 2 jam setelah paket diserahkan ke kurir.</p>
                  <br/>
                  <p>GoSend melayani pengiriman ke lebih dari 50 kota dengan jarak maksimum 40 km.</p>
                  <br/>
                  <p><strong>Barang yang tidak boleh dikirim dengan GoSend Instant:</strong></p>
                  <ol style="margin-left: 20px;">
                    <li>Barang ilegal atau terlarang menurut hukum dan peraturan yang berlaku</li>
                    <li>Obat-obatan terlarang dan narkotika</li>
                    <li>Senjata asli atau tiruan termasuk senjata api atau bagiannya</li>
                    <li>Bahan peledak dan amunisi</li>
                    <li>Sisa-sisa manusia atau hewan, bagian tubuh atau organ</li>
                    <li>Pengiriman tanpa kemasan yang tepat atau memadai</li>
                    <li>Binatang/tumbuhan hidup</li>
                    <li>Barang bernilai lebih dari Rp10 juta</li>
                    <li>Logam mulia (selain emas) dan perhiasan</li>
                    <li>Logam mulia emas dengan nilai lebih dari Rp4.5 juta</li>
                  </ol>
                  <br/>
                  <p>Jarak maks.: 40 km</p>
                  <p>Berat maks.: 20 kg</p>
                  <p>Dimensi maksimum: 40x40x40cm</p>
                  <p>Kontak: 021-50941000 (Customer Service) atau customerservice@gojek.com (email)</p>
                  <br/>
                  <p>Situs: <a href="https://www.gojek.io/" style="color: #3b82f6;">https://www.gojek.io/</a></p>
                  <p><strong>Batasan</strong></p>
                  <p>Berat maks: 20000gr</p>
                </div>
              `,
            },
          ],
        },
        {
          id: "regular",
          title: "Regular",
          activeCount: 5,
          description: "Pengiriman standar dengan estimasi waktu 2-5 hari",
          items: [
            {
              id: "jnt-regular",
              name: "J&T Regular",
              logo: "/images/logos/jnt.png",
              enabled: true,
              description: "",
            },
            {
              id: "jne-regular",
              name: "JNE Regular",
              logo: "/images/logos/jne.png",
              enabled: true,
              description: "",
            },
            {
              id: "sicepat-regular",
              name: "SiCepat Regular",
              logo: "/images/logos/sicepat.png",
              enabled: true,
              description: "",
            },
            {
              id: "anteraja-regular",
              name: "AnterAja Regular",
              logo: "/images/logos/anteraja.png",
              enabled: true,
              description: "",
            },
            {
              id: "pos-indonesia-regular",
              name: "Pos Indonesia Regular",
              logo: "/images/logos/pos-indonesia.png",
              enabled: true,
              description: "",
            },
          ],
        },
        {
          id: "cargo",
          title: "Cargo",
          activeCount: 0,
          description: "Pengiriman barang besar dengan truk cargo",
          items: [],
        },
      ],
    },
    Type: "shipping-options",
  },
};

export const fetcherOpsiPengiriman = async () => {
  if (isMockData) {
    const result = apiResult;
    return result.data.Data;
  }

  const result = await fetcherMuatparts.get(`v1/transporter/shipping-options`);
  return result?.data?.Data || {};
};

export const useGetOpsiPengiriman = () =>
  useSWR(`shipping-options`, fetcherOpsiPengiriman);
