'use client';

import { useEffect, useState } from 'react';

interface TimelineEvent {
    time: string;
    label: string;
    date: string;
    activateAt: Date;
}

const TIMELINE: TimelineEvent[] = [
    { time: '9h00',  label: 'NGỦ',            date: '01/09/25', activateAt: new Date('2025-09-01T09:00:00') },
    { time: '10h00', label: 'ĐÁNH VÒNG LOẠI', date: '01/09/25', activateAt: new Date('2025-09-01T10:00:00') },
    { time: '11h00', label: 'ĐÁNH ĐÀN',       date: '01/09/25', activateAt: new Date('2025-09-01T11:00:00') },
    { time: '12h00', label: 'CẠP ĐẤT',        date: '01/09/25', activateAt: new Date('2025-09-01T12:00:00') },
    { time: '13h00', label: 'XAXALELE',        date: '01/09/25', activateAt: new Date('2025-09-01T13:00:00') },
];

export default function FormatPage() {
    // const now = useMemo(() => new Date(), []);

    // const activeIndex = useMemo(() => {
    //     let idx = -1;
    //     TIMELINE.forEach((event, i) => {
    //         if (now >= event.activateAt) idx = i;
    //     });
    //     return idx;
    // }, [now]);

    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        // The button will appear after user scrolling for around 200px
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        }

        window.addEventListener('scroll', handleScroll, {passive: true});
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    return (
        <>
            <div className='min-h-screen flex flex-col pt-[95px] sm:pt-[111px] pb-8 px-4 sm:px-8'>
                <div className='w-full max-w-4xl mx-auto flex flex-col gap-6'>

                    {/* Timeline box */}
                    <div className='rounded-2xl px-6 sm:px-10 py-8 flex flex-col gap-0'
                        style={{ background: 'rgba(15, 20, 50, 0.72)', backdropFilter: 'blur(12px)' }}>

                        {/* Row 1 — time labels */}
                        <div className='flex justify-between mb-3'>
                            {TIMELINE.map((event) => (
                                <div key={event.time} className='flex flex-col items-center' style={{ width: `${100 / TIMELINE.length}%` }}>
                                    <span className='font-bold text-lg sm:text-2xl text-white'>{event.time}</span>
                                    <span className='text-white/50 text-xs mt-0.5'>{event.date}</span>
                                </div>
                            ))}
                        </div>

                        {/* Row 2 — track + dots */}
                        <div className='relative flex items-center'>
                            <div className='absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white' />

                            {TIMELINE.map((event) => (
                                <div key={event.time} className='flex justify-center z-10' style={{ width: `${100 / TIMELINE.length}%` }}>
                                    <div className='w-3.5 h-3.5 rounded-full flex-shrink-0 bg-white' />
                                </div>
                            ))}
                        </div>

                        {/* Row 3 — event labels */}
                        <div className='flex justify-between mt-3'>
                            {TIMELINE.map((event) => (
                                <div key={event.time} className='flex justify-center' style={{ width: `${100 / TIMELINE.length}%` }}>
                                    <span className='font-bold text-xs sm:text-sm text-center leading-tight text-white'>
                                        {event.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Text content box */}
                    <div className='rounded-2xl px-6 sm:px-10 py-8 flex flex-col gap-8'
                        style={{ background: 'rgba(15, 20, 50, 0.72)', backdropFilter: 'blur(12px)', minHeight: '2277px' }}>

                        <section>
                            <h2 className='font-bold text-xl sm:text-2xl text-white mb-3'>THÔNG TIN CHUNG</h2>
                            <p className='text-white/80 text-sm sm:text-base leading-relaxed mb-4'>
                                VHM Championship — Soralia CAFE là giải đấu Arknights thường niên được tổ chức bởi cộng đồng VHM,
                                với sự hợp tác của DreamGames, Soralia CAFE và Arknights VNS. Giải đấu hướng đến việc tạo ra
                                một sân chơi công bằng, lành mạnh và chuyên nghiệp cho tất cả người chơi tại Việt Nam.
                            </p>
                            <p className='text-white/80 text-sm sm:text-base leading-relaxed mb-4'>
                                Mùa giải lần này quy tụ các đội tuyển mạnh nhất từ khắp cả nước, thi đấu trong nhiều vòng
                                kịch tính để tranh giành danh hiệu cao nhất. Mỗi trận đấu đều được phát sóng trực tiếp và
                                bình luận bởi các caster hàng đầu cộng đồng.
                            </p>
                            <p className='text-white/80 text-sm sm:text-base leading-relaxed'>
                                Toàn bộ giải đấu được tổ chức online, đảm bảo tính minh bạch thông qua hệ thống ghi hình
                                và kiểm tra replay. Ban tổ chức có quyền disqualify bất kỳ đội nào vi phạm quy định về
                                gian lận hoặc hành vi không thể chấp nhận trong cộng đồng.
                            </p>
                        </section>

                        <section>
                            <h2 className='font-bold text-xl sm:text-2xl text-white mb-3'>LUẬT LỆ CHUNG</h2>
                            <ul className='text-white/80 text-sm sm:text-base leading-relaxed list-disc list-inside flex flex-col gap-2'>
                                <li>Mỗi đội tham dự phải có đúng 4 thành viên chính thức và tối đa 1 người dự bị.</li>
                                <li>Tài khoản thi đấu phải là tài khoản chính, không được dùng tài khoản mượn hoặc share.</li>
                                <li>Không được sử dụng bất kỳ công cụ hỗ trợ, macro hay bot trong quá trình thi đấu.</li>
                                <li>Kết quả ghi hình từ phía ban tổ chức là căn cứ phán quyết cuối cùng trong mọi tranh chấp.</li>
                                <li>Các đội phải có mặt online và sẵn sàng đúng giờ. Trễ quá 10 phút sẽ bị xử thua ván đó.</li>
                                <li>Mọi hành vi toxic, hate speech hay phân biệt đối xử đều bị xử lý nghiêm theo quy định của ban tổ chức.</li>
                                <li>Quyết định của ban tổ chức là quyết định cuối cùng và không có kháng cáo sau 24 giờ.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className='font-bold text-xl sm:text-2xl text-white mb-3'>FORMAT THI ĐẤU</h2>
                            <div className='flex flex-col gap-4 text-white/80 text-sm sm:text-base leading-relaxed'>
                                <div>
                                    <h3 className='text-white font-semibold mb-1'>Vòng Loại (Vòng Robin)</h3>
                                    <p>Các đội thi đấu theo thể thức round-robin trong bảng. Hai đội đứng đầu mỗi bảng sẽ tiến vào vòng loại trực tiếp. Kết quả được tính theo điểm số, sau đó là hiệu số ván thắng/thua.</p>
                                </div>
                                <div>
                                    <h3 className='text-white font-semibold mb-1'>Vòng Tứ Kết</h3>
                                    <p>Tám đội tiếp tục thi đấu theo thể thức loại trực tiếp Bo3. Đội nào thắng 2 ván trước tiến tiếp vào bán kết.</p>
                                </div>
                                <div>
                                    <h3 className='text-white font-semibold mb-1'>Bán Kết & Chung Kết</h3>
                                    <p>Bán kết và Chung kết sử dụng thể thức Bo5. Chung kết diễn ra trực tiếp có khán giả tham dự và caster bình luận live.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 className='font-bold text-xl sm:text-2xl text-white mb-3'>GIẢI THƯỞNG</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                                {[
                                    { place: '🥇 Vô Địch',    prize: '5,000,000 VNĐ + Cup + Medal' },
                                    { place: '🥈 Á Quân',     prize: '2,500,000 VNĐ + Medal' },
                                    { place: '🥉 Hạng Ba',    prize: '1,000,000 VNĐ + Medal' },
                                ].map(({ place, prize }) => (
                                    <div key={place} className='rounded-xl p-4 flex flex-col gap-1'
                                        style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.12)' }}>
                                        <span className='font-bold text-white text-base'>{place}</span>
                                        <span className='text-white/60 text-sm'>{prize}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section>
                            <h2 className='font-bold text-xl sm:text-2xl text-white mb-3'>ĐIỀU KHOẢN BỔ SUNG</h2>
                            <p className='text-white/80 text-sm sm:text-base leading-relaxed mb-4'>
                                Ban tổ chức có quyền thay đổi lịch thi đấu trong trường hợp bất khả kháng như sự cố
                                máy chủ hoặc thảm họa thiên nhiên. Mọi thay đổi sẽ được thông báo qua kênh Discord
                                chính thức ít nhất 2 giờ trước khi trận đấu bắt đầu.
                            </p>
                            <p className='text-white/80 text-sm sm:text-base leading-relaxed mb-4'>
                                Các đội đăng ký tham dự đồng ý cho phép ban tổ chức sử dụng hình ảnh, video và tên
                                đội trong các tài liệu truyền thông liên quan đến giải đấu mà không cần thêm sự đồng ý.
                            </p>
                            <p className='text-white/80 text-sm sm:text-base leading-relaxed mb-4'>
                                Trong trường hợp kết quả bảng đấu bằng điểm, tiebreaker sẽ được áp dụng theo thứ tự:
                                (1) Head-to-head, (2) Hiệu số ván, (3) Tổng damage trong ván quyết định.
                            </p>
                            <p className='text-white/80 text-sm sm:text-base leading-relaxed'>
                                Mọi thắc mắc và khiếu nại phải được gửi qua form chính thức trong vòng 24 giờ sau
                                khi kết quả được công bố. Sau thời hạn này, mọi khiếu nại sẽ không được xem xét.
                            </p>
                        </section>

                    </div>
                </div>
            </div>

            {/* Scroll-to-top button */}
            <button
                onClick={scrollToTop}
                aria-label='Scroll to top'
                className='fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer'
                style={{
                    background: 'rgba(15, 20, 50, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    opacity: showScrollTop ? 1 : 0,
                    pointerEvents: showScrollTop ? 'auto' : 'none',
                    transform: showScrollTop ? 'translateY(0)' : 'translateY(12px)',
                }}
            >
                <svg width='20' height='20' viewBox='0 0 20 20' fill='none'>
                    <path d='M10 15V5M10 5L5 10M10 5L15 10' stroke='white' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round' />
                </svg>
            </button>
        </>
    );
}
