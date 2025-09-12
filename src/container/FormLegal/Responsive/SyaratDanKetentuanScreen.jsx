// Added import for Checkbox component
import { useState } from "react";

import { Button, toast } from "@muatmuat/ui";

import { ResponsiveFooter } from "@/components/Footer/ResponsiveFooter";
import Checkbox from "@/components/Form/Checkbox";

import { useResponsiveNavigation } from "@/lib/responsive-navigation";

import PrimaryResponsiveLayout from "@/layout/ResponsiveLayout/PrimaryResponsiveLayout";

function SyaratDanKetentuanScreen({ type = "default", queryParams }) {
  const [isChecked, setIsChecked] = useState(false); // Added state for checkbox
  const navigate = useResponsiveNavigation();

  const handleSubmit = () => {
    // Check if checkbox is checked before proceeding
    if (!isChecked) {
      toast.error(
        "Kamu perlu menyetujui Syarat & Ketentuan sebelum melanjutkan"
      );
      return;
    }

    // Handle form submission logic here
    navigate.push("/success-register");
  };

  return (
    <PrimaryResponsiveLayout
      title="Syarat dan Ketentuan"
      className="px-4 text-sm font-semibold"
      onClickBackButton={true}
    >
      <h4 className="text-md text-center font-semibold leading-6 text-white">
        Syarat dan Ketentuan
      </h4>
      <div className="mt-[18px] flex h-[367px] flex-col rounded-lg bg-background py-3 pr-[3px]">
        <div className="overflow overflow-y-auto">
          <p className="px-2 pl-4 text-justify text-xs font-normal leading-4 text-[#676767]">
            Ketentuan Penggunaan ini adalah bentuk kesepakatan yang dituangkan
            dalam suatu perjanjian yang sah antara pengguna (“Anda”) dan PT
            AZLOGISTIK DOT COM, suatu perseroan terbatas yang didirikan
            berdasarkan hukum negara Republik Indonesia dan berdomisili di Kota
            Surabaya, Indonesia (“Kami”). Jika Anda tidak menyetujui salah satu,
            sebagian atau seluruh ketentuan dalam Ketentuan Penggunaan ini, maka
            Anda tidak diperkenankan untuk menggunakan Layanan MuatMuat.
            Ketentuan Penggunaan ini mengatur akses dan penggunaan Anda atas
            aplikasi, situs web, layanan, konten dan produk Kami yang bernama
            “MuatMuat”, serta pemesanan, pembayaran atau penggunaan layanan yang
            tersedia di dalamnya baik melalui Aplikasi dan Website (“Layanan
            MuatMuat”). Anda disarankan membaca Ketentuan Penggunaan ini dengan
            seksama karena terkait dengan hak dan kewajiban Anda dalam
            menggunakan Layanan MuatMuat. Dengan mendaftar dan/atau menggunakan
            Layanan MuatMuat, maka Anda dianggap telah membaca, mengerti,
            memahami dan menyetujui semua isi dalam Ketentuan Penggunaan ini.
            Anda juga menyetujui Ketentuan Penggunaan tambahan, termasuk
            Ketentuan Penggunaan pada setiap layanan yang ada beserta segala
            perubahannya yang merupakan bagian yang tidak terpisahkan dari
            Ketentuan Penggunaan ini. 1. Definisi • “Aplikasi” adalah aplikasi
            milik Kami yang digunakan untuk mengakses dan menggunakan Layanan
            MuatMuat melalui jaringan internet. • “MuatMuat” merupakan sebuah
            ekosistem logistik yang menyediakan beberapa layanan, termasuk namun
            tidak terbatas kepada: BigFleet, Transport Market, MUAT Trans,
            Warehouse, Transportation Management System (TMS), Finance and
            Insurance, Merchant, Market, Dealership and Workshop, Services dan
            Logistic Human Capital. • “Pengguna” adalah setiap pengguna Layanan
            MuatMuat, baik melalui Website dan/atau Aplikasi yang terdiri dari
            Shipper, Transporter, Buyer, Seller, Employer dan/atau Jobseeker
            sesuai pilihan yang tersedia. • “Website” adalah situs
            https://muatmuat.com untuk mengakses dan menggunakan Layanan
            MuatMuat melalui jaringan internet. 2. Penggunaan Aplikasi dan
            Website untuk Layanan MuatMuat • Akses dan penggunaan Layanan
            MuatMuat tunduk pada Ketentuan Penggunaan ini. Anda mempunyai
            kebebasan penuh untuk memilih menggunakan Layanan MuatMuat atau
            layanan lain, atau berhenti menggunakan Layanan MuatMuat. • Pengguna
            dapat melakukan pendaftaran akun melalui tautan https://muatmuat.com
            atau Aplikasi. Pengguna wajib mengisi daftar isian dan mengunggah
            dokumen yang dipersyaratkan pada tautan tersebut untuk kemudian akan
            diverifikasi. • Pengguna yang telah mendaftar dapat bertindak
            sebagai Shipper, Transporter, Buyer, Seller, Employer dan/atau
            Jobseeker sesuai pilihan yang tersedia dalam Layanan MuatMuat. •
            Pengguna menjamin bahwa seluruh data diri dan informasi yang
            disampaikan adalah benar dan akurat, termasuk namun tidak terbatas
            pada nomor telepon, alamat email dan dokumen persyaratan lainnya. •
            Kami akan melakukan verifikasi terhadap Pengguna yang telah
            mendaftarkan diri pada Aplikasi dan Website. Dalam hal terdapat
            perubahan data-data Pengguna, maka Pengguna wajib menyampaikan
            kepada Kami. Kami tidak bertanggung jawab atas kerugian yang terjadi
            dalam hal terdapat perubahan yang tidak diberitahukan kepada Kami. •
            Kami berhak menghentikan Layanan MuatMuat secara sepihak terhadap
            akun atau Pengguna tertentu apabila Pengguna melakukan hal-hal yang
            merugikan Kami dan/atau pengguna lainnya, yang dapat mengindikasikan
            adanya pelanggaran hukum (Pidana) atau potensi merugikan pihak lain
            (Perdata). • Pengguna dilarang menggunakan segala informasi dan
            fitur di dalam MuatMuat untuk kepentingan di luar konteks Layanan
            MuatMuat, seperti menyebarkan konten iklan yang mengganggu pengguna
            lain, menyebarkan ujaran kebencian, SARA dan berita bohong serta
            perihal negatif lain yang tidak sesuai dengan tujuan keberadaan
            Layanan MuatMuat. • Setelah mendaftar, Pengguna akan mendapatkan hak
            untuk mengakses Layanan MuatMuat. Hak yang diberikan kepada Pengguna
            dibatasi dengan ketentuan i) Pengguna dilarang untuk menggunakan
            secara komersial Layanan MuatMuat dengan cara yang tidak sesuai
            dengan ketentuan yang telah ditentukan oleh Kami, ii) Pengguna
            dilarang untuk memodifikasi, membuat pekerjaan turunan, membongkar,
            menyusun kembali atau merekayasa kembali Aplikasi dan Website
            Layanan MuatMuat, iii) Pengguna dilarang mengakses Layanan MuatMuat
            dalam rangka membangun aplikasi atau situs web yang mirip atau untuk
            bersaing dengan Kami dan iv) iv) Aplikasi dan Website MuatMuat tidak
            boleh disalin, dibuat ulang, disebarkan, dipublikasikan kembali,
            diunduh, ditampilkan, dipasang atau dikirimkan dalam bentuk apapun
            dan dengan cara apapun. Seluruh hak cipta dan kepemilikan Aplikasi
            dan Website MuatMuat melekat kepada semua isi dan salinan dokumen
            yang diperoleh darinya. • Pasal 32 ayat (3) Undang-Undang ITE
            menyatakan bahwa: “Terhadap perbuatan sebagaimana yang dimaksud pada
            Pasal 32 ayat (1) yang mengakibatkan terbukanya suatu Informasi
            Elektronik dan/atau Dokumen Elektronik yang bersifat rahasia menjadi
            dapat diakses oleh publik dengan keutuhan data yang tidak
            sebagaimana mestinya.” • Pasal 48 ayat (3) Undang-Undang ITE
            menyatakan bahwa: “Setiap Orang yang memenuhi unsur sebagaimana
            dimaksud dalam Pasal 32 ayat (3) dipidana dengan pidana penjara
            paling lama 10 (sepuluh) tahun dan/atau denda paling banyak Rp.
            5.000.000.000,00 (lima miliar rupiah).” 3. Disclaimer • Kami
            menyediakan Layanan MuatMuat sebagaimana adanya. Kami tidak menjamin
            bahwa Layanan MuatMuat i) akan memenuhi kebutuhan dan harapan
            Pengguna, ii) akan selalu ada, tersedia, bebas hambatan, tepat
            waktu, aman dan bebas dari kesalahan, iii) akan selalu akurat,
            handal, bebas dari virus atau software berbahaya dan lengkap dan iv)
            pasti menghasilkan suatu pendapatan, keuntungan atau pengurangan
            beban biaya tertentu. Layanan MuatMuat bergantung kepada
            keterbatasan dan permasalahan yang melekat pada penggunaan internet
            dan komunikasi secara elektronik. Kami tidak bertanggung jawab atas
            segala keterlambatan, kegagalan penyampaian, kegagalan pekerjaan
            atau kerugian lainnya yang ditimbulkan dari permasalahan tersebut. •
            Pengguna mengakni bahwa Kami adalah perusahaan teknologi yang
            menyediakan layanan ekosistem logistik. • Pengguna dengan ini
            membebaskan dan melepaskan Kami, termasuk karyawan dan perwakilan
            Kami dari segala perselisihan, sengketa, perbedaan pendapat, klaim,
            kontroversi, gugatan, tuntutan, kewajiban dan tanggung jawab dalam
            bentuk apapun, terkait dengan segala bentuk kerugian, cedera badan,
            kematian dan kerusakan harta benda yang timbul berkenaan dengan
            penggunaan Layanan MuatMuat. 4. Hak Kekayaan Intelektual Seluruh hak
            kekayaan intelektual, termasuk hak cipta, paten, merek dan rahasia
            dagang yang ada di Aplikasi dan Website Layanan MuatMuat adalah
            milik Kami. Penyediaan akses Pengguna kepada Layanan MuatMuat bukan
            berarti merupakan pengalihan atas hak kekayaan intelektual dan
            kepemilikan terhadapnya kepada Pengguna atau pihak lainnya. Kami
            mempertahankan segala hak dan kepemilikan atas Layanan MuatMuat,
            termasuk yang tidak dijabarkan dalam Perjanjian ini. 5. Lain-lain •
            Perjanjian ini dibuat dan ditafsirkan berdasarkan peraturan
            perundangan-undangan yang berlaku di Negara Republik Indonesia. •
            Apabila satu atau lebih ketentuan dalam Perjanjian ini tidak
            berlaku, tidak sah atau tidak dapat dilaksanakan dengan cara apa pun
            berdasarkan hukum atau keputusan yang berlaku, maka keabsahan,
            legalitas dan dapat dilaksanakannya ketentuan lainnya yang tercantum
            dalam Perjanjian ini tidak akan dipengaruhi atau dikurangi dengan
            cara apa pun juga. • Tidak ada satu pihakpun yang berhak untuk
            menuntut ganti rugi yang bersifat tidak langsung, konsekuensional
            dan/atau immaterial seperti kehilangan
            keuntungan/penghasilan/pendapatan yang diharapkan terlepas dari
            apapun penyebabnya, termasuk akibat wanprestasi dari Pihak lainnya.
            • Para Pihak harus: (i) menjaga kerahasiaan semua informasi dan
            dokumen terkait; (ii) menyimpan informasi dan dokumen terkait pada
            suatu lokasi yang aman; (iii) tidak menggunakan informasi dan
            dokumen terkait untuk tujuan apapun selain dari yang ditetapkan
            dalam Perjanjian ini; dan (iv) tidak mengungkapkan informasi dan
            dokumen terkait kepada siapapun yang tidak berkepentingan. • Apabila
            terjadi perselisihan atau perbedaan pendapat antara Para Pihak
            sehubungan dengan pelaksanaan atau keabsahan Perjanjian ini, maka
            Para Pihak sepakat untuk menyelesaikannya secara musyawarah untuk
            mencapai mufakat. Apabila cara musyawarah tidak memperoleh
            penyelesaian yang memuaskan, maka Para Pihak sepakat untuk
            mengajukan penyelesaian perselisihan atau perbedaan pendapat
            tersebut di Pengadilan Negeri Surabaya.
          </p>
        </div>
      </div>

      {/* Added div wrapper for checkbox with white text */}
      <div className="mt-4 pb-20">
        <Checkbox
          checked={isChecked}
          onChange={({ checked }) => setIsChecked(checked)}
          appearance={{
            inputClassName: isChecked
              ? "bg-yellow-500 border-yellow-500 after:border-blue-500"
              : "bg-white",
          }}
        >
          <div className="text-xs font-semibold text-white">
            Dengan ini, saya menyatakan bersedia dihubungi oleh tim muatparts
            melalui WhatsApp, telepon, atau email untuk keperluan proses kerja
            sama dan verifikasi data.
          </div>
        </Checkbox>
      </div>

      <ResponsiveFooter className="bg-transparent shadow-[0_0_#0000]">
        <Button
          variant="muatparts-warning"
          className="w-full"
          onClick={handleSubmit}
        >
          Selanjutnya
        </Button>
      </ResponsiveFooter>
    </PrimaryResponsiveLayout>
  );
}

export default SyaratDanKetentuanScreen;
