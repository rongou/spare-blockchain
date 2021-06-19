const spare = require("../../util/spare");

describe("spare", () => {
  it("converts number mojo to spare", () => {
    const result = spare.mojo_to_spare(1000000);

    expect(result).toBe(0.000001);
  });
  it("converts string mojo to spare", () => {
    const result = spare.mojo_to_spare("1000000");

    expect(result).toBe(0.000001);
  });
  it("converts number mojo to spare string", () => {
    const result = spare.mojo_to_spare_string(1000000);

    expect(result).toBe("0.000001");
  });
  it("converts string mojo to spare string", () => {
    const result = spare.mojo_to_spare_string("1000000");

    expect(result).toBe("0.000001");
  });
  it("converts number spare to mojo", () => {
    const result = spare.spare_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it("converts string spare to mojo", () => {
    const result = spare.spare_to_mojo("0.000001");

    expect(result).toBe(1000000);
  });
  it("converts number mojo to colouredcoin", () => {
    const result = spare.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it("converts string mojo to colouredcoin", () => {
    const result = spare.mojo_to_colouredcoin("1000000");

    expect(result).toBe(1000);
  });
  it("converts number mojo to colouredcoin string", () => {
    const result = spare.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe("1,000");
  });
  it("converts string mojo to colouredcoin string", () => {
    const result = spare.mojo_to_colouredcoin_string("1000000");

    expect(result).toBe("1,000");
  });
  it("converts number colouredcoin to mojo", () => {
    const result = spare.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it("converts string colouredcoin to mojo", () => {
    const result = spare.colouredcoin_to_mojo("1000");

    expect(result).toBe(1000000);
  });
});
