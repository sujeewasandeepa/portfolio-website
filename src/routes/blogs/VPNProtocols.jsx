export default function VPNProtocols () {
    return (
        <>
        <div className="flex flex-col my-10 items-center">
            <h1 className="mx-5 text-5xl text-slate-600">VPN Protocols</h1>

            <div className="my-10 items-center md:mx-auto md:w-2/3 text-slate-600">

                <p className="mx-5 mb-5 md:mx-0">
                    VPN Protocols are the methods that are used to encrypt the data that is being sent over the internet.
                    There are many different protocols that are used for this purpose. Some of them are more secure than others.
                    Some of them are faster than others. 
                </p>

                <table className="table-auto border-collapse border border-slate-400">
                    <thead>
                        <tr>
                            <th className="p-2 md:p-5 border border-slate-300">Protocol</th>
                            <th className="p-2 md:p-5 border border-slate-300">Security</th>
                            <th className="p-2 md:p-5 border border-slate-300">Firewall</th>
                            <th className="p-2 md:p-5 border border-slate-300">Conclusion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-2 md:p-5 border border-slate-300">PPTP</td>
                            <td className="p-2 md:p-5 border border-slate-300">Uses Basic Encryption (not secure)</td>
                            <td className="p-2 md:p-5 border border-slate-300">TCP port 1723; easy to block</td>
                            <td className="p-2 md:p-5 border border-slate-300">Outdated, don't use it</td>
                        </tr>
                        <tr>
                            <td className="p-2 md:p-5 border border-slate-300">L2TP</td>
                            <td className="p-2 md:p-5 border border-slate-300">Uses IPSec Encryption</td>
                            <td className="p-2 md:p-5 border border-slate-300">UDP Port 500. Easy to block</td>
                            <td className="p-2 md:p-5 border border-slate-300">Better than PPTP</td>
                        </tr>
                        <tr>
                            <td className="p-2 md:p-5 border border-slate-300">SSTP</td>
                            <td className="p-2 md:p-5 border border-slate-300">SSL 3.0 Encryption (highly secure)</td>
                            <td className="p-2 md:p-5 border border-slate-300">Use 443 port; hard to block</td>
                            <td className="p-2 md:p-5 border border-slate-300">Only for Windows</td>
                        </tr>
                        <tr>
                            <td className="p-2 md:p-5 border border-slate-300">IKEv2</td>
                            <td className="p-2 md:p-5 border border-slate-300">IPSec Encryption</td>
                            <td className="p-2 md:p-5 border border-slate-300">N/A</td>
                            <td className="p-2 md:p-5 border border-slate-300">Allows automatic VPN connections.</td>
                        </tr>
                        <tr>
                            <td className="p-2 md:p-5 border border-slate-300">OPENVPN</td>
                            <td className="p-2 md:p-5 border border-slate-300">AES Encryption (highly secure)</td>
                            <td className="p-2 md:p-5 border border-slate-300">Use 443 port; hard to block</td>
                            <td className="p-2 md:p-5 border border-slate-300">Faster, Secure and Cross platform. Difficult to setup</td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
        </>
    )
}